import Directus from "@directus/sdk-js";

export const directus = new Directus({
  mode: "jwt",
  project: "greeneetwork",
  url: process.env.API_URL,
  token: process.env.API_TOKEN,
});
