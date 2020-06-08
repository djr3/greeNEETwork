import React from "react";
import { directus } from "core/cli";
import { SitemapItem, EnumChangefreq } from "sitemap";
import { SitemapStream, streamToPromise } from "sitemap";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";

// interface RouteItem extends Omit<SitemapItem, "img" | "links" | "video"> {
//   title: string; // used as string title
//   sitemap: boolean; // used to filter routes when construction sitemap
//   navigation: boolean; // used to filter routes when construction navigation
//   img?: SitemapItem["img"]; // transform type to optional
//   links?: SitemapItem["links"]; // transform type to optional
//   video?: SitemapItem["video"]; // transform type to optional
// }

// export const routes: RouteItem[] = [
//   {
//     title: "greeNEETwork",
//     sitemap: true,
//     navigation: false,
//     url: "/",
//     changefreq: EnumChangefreq.MONTHLY,
//   },
// ];

interface PageContext extends NextPageContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

class Sitemap extends React.Component {
  static async getInitialProps({ req, res }: PageContext) {
    res.setHeader("Content-Type", "text/xml");
    const hostname = process.env.APP_URL || "https://" + req.headers.host;

    // Set fields to query via API
    const fields = ["slug"];

    try {
      // Initialize the sitemap stream
      const smStream = new SitemapStream({ hostname });

      // Add the static pages data
      const now = new Date().toISOString();
      const pages = [
        "/",
        "/credits",
        "/contatti",
        "/esplora",
        "/itinerari",
        "/reti",
        "/storie",
        "/privacy",
      ];
      for (const page of pages) {
        smStream.write({
          url: smStream.hostname + page,
          lastmod: now,
          priority: page === "/" ? 1.0 : 0.9,
          changefreq: EnumChangefreq.MONTHLY,
        });
      }

      // Dynamic pages data
      const luoghi = await (
        await directus.getItems<{ slug }[]>("luoghi", { fields })
      ).data;
      // console.log("Luoghi : ", luoghi);
      for (const luogo of luoghi) {
        smStream.write({
          url: smStream.hostname + "/esplora/" + luogo.slug,
          lastmod: now,
          priority: 0.8,
          changefreq: EnumChangefreq.MONTHLY,
        });
      }

      const reti = await (
        await directus.getItems<{ slug }[]>("reti_territoriali", { fields })
      ).data;
      // console.log("Reti : ", reti);
      for (const rete_territoriale of reti) {
        smStream.write({
          url: smStream.hostname + "/reti/" + rete_territoriale.slug,
          lastmod: now,
          priority: 0.7,
          changefreq: EnumChangefreq.MONTHLY,
        });
      }

      const storie = await (
        await directus.getItems<{ slug; modified_on }[]>("articoli", {
          fields: ["slug", "modified_on"],
          // Add only the published posts to the sitemap
          filter: { status: { eq: "published" } },
        })
      ).data;
      for (const storia of storie) {
        smStream.write({
          url: smStream.hostname + "/storie/" + storia.slug,
          lastmod: storia.modified_on,
          priority: 0.7,
          changefreq: EnumChangefreq.MONTHLY,
        });
      }

      // Terminate the sitemap stream and return it as XML in the body response
      smStream.end();
      const sitemap = await streamToPromise(smStream).then((sm) =>
        sm.toString()
      );
      res.write(sitemap);
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.end();
    }
  }
}

export default Sitemap;
