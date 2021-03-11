import { directus } from "../src/core/cli";
import { EnumChangefreq, SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";

export async function buildSitemap() {
  const hostname = "https://" + process.env.APP_URL;

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
    const { data: luoghi } = await directus.getItems<{ slug }[]>("luoghi", {
      fields,
      limit: 500,
    });
    // console.log("Luoghi : ", luoghi);
    for (const luogo of luoghi) {
      smStream.write({
        url: smStream.hostname + "/esplora/" + luogo.slug,
        lastmod: now,
        priority: 0.8,
        changefreq: EnumChangefreq.MONTHLY,
      });
    }

    const { data: reti } = await directus.getItems<{ slug }[]>(
      "reti_territoriali",
      { fields }
    );
    // console.log("Reti : ", reti);
    for (const rete_territoriale of reti) {
      smStream.write({
        url: smStream.hostname + "/reti/" + rete_territoriale.slug,
        lastmod: now,
        priority: 0.7,
        changefreq: EnumChangefreq.MONTHLY,
      });
    }

    const { data: storie } = await directus.getItems<{ slug; modified_on }[]>(
      "articoli",
      {
        fields: ["slug", "modified_on"],
        limit: 100,
        // Add only the published posts to the sitemap
        filter: { status: { eq: "published" } },
      }
    );
    for (const storia of storie) {
      smStream.write({
        url: smStream.hostname + "/storie/" + storia.slug,
        lastmod: storia.modified_on,
        priority: 0.7,
        changefreq: EnumChangefreq.MONTHLY,
      });
    }

    // Terminate the sitemap stream and write it as XML
    smStream.end();
    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());
    fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
  } catch (e) {
    console.error(e);
  }
}
