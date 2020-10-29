import { NextApiRequest, NextApiResponse } from "next";
import { directus } from "core/cli";
import { slugify } from "core/utils";
import { IPost } from "@types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.complete) {
    const { categorie, ...post } = JSON.parse(req.body);

    const { data: lastPost } = await directus.getItems<IPost[]>("articoli", {
      limit: 1,
      sort: "-id",
      fields: ["id"],
    });
    const lastId = Number.parseInt(lastPost[0].id.substr(3));

    const articolo = await directus
      .createItem("luoghi", {
        ...post,
        id: "ART" + (lastId + 1),
        slug: slugify(post.titolo),
      })
      .then((r) => r.data.id)
      .catch((e) => console.error(e));
    if (articolo && categorie.length > 0) {
      await Promise.all(
        categorie.map((categoria) => {
          return directus.createItem("articoli_categorie", {
            articolo,
            categoria,
          });
        })
      );
    }

    if (articolo) {
      return res.status(200).json({ ok: true });
    } else return res.status(400).json({ ok: false });
  } else {
    return res.status(400).json({ ok: false });
  }
};
