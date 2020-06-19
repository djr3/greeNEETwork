import { Client, Server } from "styletron-engine-atomic";
import { DebugEngine } from "styletron-react";

const getHydrateClass = () =>
  document.getElementsByClassName("_styletron_hydrate_");

const scalingWidth = { min: 400, max: 1200 };
const scalingText = { min: 14, max: 16 };

export const engine =
  typeof window === "undefined"
    ? new Server()
    : new Client({
        hydrate: getHydrateClass() as HTMLCollectionOf<HTMLStyleElement>,
      });

export const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

export const theme = {
  colors: {
    dark: "#282828",
    info700: "#6c6c6c",
    // buster: "#DCF763",
    // boogerBuster: "#ccff66",
    // banana: "#F1E8B8",
    // mintGreen: "#85FF9E",
    magicMint: "#A6F4DC",
    magicMintLight: "#d9ffff",
    magicMintDark: "#75c1aa",
    magicTeal: "#d7faea",
    // pastelRed: "#ff6666",
    // silver: "#BFC8AD",
    // silverRoman: "#848C8E",
    // primary: "#333333",
    // primaryLight: "#5c5c5c",
    // primaryDark: "#0c0c0c",
    // secondary: "#ccff66",
    // secondaryLight: "#ffff98",
    // secondaryDark: "#98cc32",
  },
  grid: {
    // containerMaxWidth: {
    //   xs: "430px",
    //   sm: "620px",
    //   md: "850px",
    //   lg: "1040px",
    //   xl: "1200px",
    // },
    containerMaxWidth: {
      xs: "430px",
      sm: "620px",
      md: "calc(100vw - 200px)",
      lg: "calc(100vw - 200px)",
      xl: "calc(100vw - 200px)",
    },
    gutterWidth: "12px",
  },
  fontFamily: {
    // primary: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    // secondary: `serif`,
    primary: `"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue"`,
    // primary: "'Work Sans', sans-serif",
    // secondary: "Gelasio, serif",
    code: "monospace",
  },
  textSize: {
    size: {
      // body: `calc( ${scalingText.min}px + (${scalingText.max} - ${scalingText.min}) * ( (100vw - ${scalingWidth.min}px) / ( ${scalingWidth.max} - ${scalingWidth.min}) ))`,
      body: "14px",
      paragraph: "16px",
      subheader: "1.125rem",
      h1: "2.027rem",
      h2: "1.802rem",
      h3: "1.602rem",
      h4: "1.424rem",
      h5: "1.266rem",
      h6: "1.125rem",
      // display1: "2.281rem",
      // display2: "2.566rem",
      // display3: "2.887rem",
      // display4: "3.247rem",
    },
    height: {
      // body: `calc(${scalingText.max}px + 1.05vw)`,
      body: "1.6em",
      paragraph: "1.6em",
      subheader: "1.125em",
      h1: "calc(1em + 1vw)",
      h2: "calc(1em + .7vw)",
      h3: "calc(1em + .5vw)",
      h4: "calc(1em + .2vw)",
      h5: "calc(1em + .2vw)",
      h6: "calc(1em + .2vw)",
      // Major second scale - 1.125
      // h1: "2.027rem",
      // h2: "1.802rem",
      // h3: "1.602rem",
      // h4: "1.424rem",
      // h5: "1.266rem",
      // h6: "1.125rem",
      // Major second scale - 1.125 - Inverted
      // h6: "2.027em",
      // h5: "1.802em",
      // h4: "1.602em",
      // h3: "1.424em",
      // h2: "1.266em",
      // h1: "1.125em",
      // // Minor second scale - 1.067
      // h1: "1.476em",
      // h2: "1.383em",
      // h3: "1.296em",
      // h4: "1.215em",
      // h5: "1.138em",
      // h6: "1.067em",
      // h1: "1.067em",
      // h2: "1.138em",
      // h3: "1.215em",
      // h4: "1.138em",
      // h5: "1.067em",
      // h6: "1em",
      // // Minor second scale - Inverted
      // h6: "1.476em",
      // h5: "1.383em",
      // h4: "1.296em",
      // h3: "1.215em",
      // h2: "1.138em",
      // h1: "1.067em",
    },
  },
  transition: {
    default: "all .25s ease-in-out",
    bg: "all .4s ease-in-out",
    cubic: "all 0.5 cubic-bezier(0.86, 0, 0.07, 1)",
  },
};
