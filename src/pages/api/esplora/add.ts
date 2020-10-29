import { NextApiRequest, NextApiResponse } from "next";
import { directus } from "core/cli";
import { slugify } from "core/utils";
import { ILuogo } from "@types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.complete) {
    const { tipologie, servizi, ...place } = JSON.parse(req.body);

    const { data: lastPlace } = await directus.getItems<ILuogo[]>("luoghi", {
      limit: 1,
      sort: "-id",
      fields: ["id"],
    });
    const lastId = Number.parseInt(lastPlace[0].id.substr(1));

    const luogo = await directus
      .createItem("luoghi", {
        ...place,
        id: "L" + (lastId + 1),
        slug: slugify(place.nome),
      })
      .then((r) => r.data.id)
      .catch((e) => console.error(e));
    if (luogo && tipologie.length > 0) {
      await Promise.all(
        tipologie.map((tipologia) => {
          return directus.createItem("luoghi_tipologie", {
            luogo,
            tipologia,
          });
        })
      );
    }
    if (luogo && servizi.length > 0) {
      await Promise.all(
        servizi.map((servizio) => {
          return directus.createItem("luoghi_servizi", {
            luogo,
            servizio,
          });
        })
      );
    }

    if (luogo) {
      return res.status(200).json({ ok: true });
    } else return res.status(400).json({ ok: false });
  } else {
    return res.status(400).json({ ok: false });
  }
};
