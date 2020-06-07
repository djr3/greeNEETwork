import React from "react";
// import "./../src/styles/app.sass";

import { addParameters, addDecorator, configure } from "@storybook/react";
import { themes } from "@storybook/theming";

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider } from "atomize";
// import { BaseProvider } from "baseui";
import { theme } from "../src/styletron";

const engine = new Styletron();

// Add providers for theme and styletron
addDecorator((story) => (
  <StyletronProvider value={engine}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </StyletronProvider>
));

addParameters({
  options: {
    /**
     * theme storybook, see link below
     */
    theme: themes.dark, // default : undefined
  },
});

configure(require.context("../src", true, /\.stories\.(js|ts)x?$/), module);
