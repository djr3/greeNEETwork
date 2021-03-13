import React from "react";

import { addParameters, addDecorator, configure } from "@storybook/react";
import { themes } from "@storybook/theming";

import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { GNW_Theme } from "../src/core/theme";

// Add providers for theme
addDecorator((story) => (
  <GeistProvider theme={GNW_Theme}>
    <CssBaseline />
    {story()}
  </GeistProvider>
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
