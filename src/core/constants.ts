import { EPageType, ERobotsContent, TMetaTags } from "../interfaces";
import { concatenateStrings } from "./helper";
// import { TSocialMenu } from "../components/Social";

export const defaultBreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const defaultMediaQuery = {
  xs: `@media screen and (max-width: ${defaultBreakPoints.sm}px)`,
  sm: `@media screen and (min-width: ${defaultBreakPoints.sm}px) and (max-width: ${defaultBreakPoints.md}px)`,
  md: `@media screen and (min-width: ${defaultBreakPoints.md}px) and (max-width: ${defaultBreakPoints.lg}px)`,
  lg: `@media screen and (min-width: ${defaultBreakPoints.lg}px) and (max-width: ${defaultBreakPoints.xl}px)`,
  xl: `@media screen and (min-width: ${defaultBreakPoints.xl}px)`,
};

export const defaultLocale = "it_IT";

export const defaultMetaTags: TMetaTags = {
  canonical: process.env.APP_URL as string,
  description: "Un nuovo modello di sostenibilità valorizzata dai giovani",
  image: "https://greeneetwork.agritettura.org/img/logo.png",
  robots: concatenateStrings(ERobotsContent.index, ERobotsContent.follow),
  title: "greeNEETwork",
  type: EPageType.website,
};

export const defaultMenuItems = [
  { name: "Storie", link: "/storie" },
  { name: "Esplora", link: "/esplora" },
  { name: "Itinerari", link: "/itinerari" },
  { name: "Le Reti", link: "/reti" },
  // { name: "Eventi", link: "/eventi" },
  // { name: "Contatti", link: "/contatti" },
  { name: "Credits", link: "/credits" },
];

export const defaultSocialItems = [
  {
    name: "Facebook",
    link: "https://facebook.com/gardenet.napoli",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/agritettura2_0",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/agritettura",
  },
];
