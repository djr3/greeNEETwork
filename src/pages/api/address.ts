import { NextApiRequest, NextApiResponse } from "next";
import { directus } from "core/cli";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id, address } = req.body;

  const data =
    id && address
      ? directus
          .updateItem("luoghi", id, { indirizzo: address.display_name })
          .then((r) => r.data)
          .catch((e) => console.error(e))
      : null;

  if (data) {
    return res.status(200).json({ ok: true });
  } else return res.status(400).json({ ok: false });
};
