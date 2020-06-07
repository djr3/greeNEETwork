// import { PrismaClient } from "@prisma/client";
import Directus from "@directus/sdk-js";
// import { PrismaClient as DirectusCli } from "./directus";

// export const directus = new DirectusCli();
export const directus = new Directus({
  mode: "jwt",
  url: process.env.API_URL,
  project: "greeneetwork",
  token: process.env.API_TOKEN,
});
// export const prisma = new PrismaClient();
