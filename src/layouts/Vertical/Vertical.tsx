/**
 * App Theme
 */
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { GNW_Theme } from "core/theme";

/**
 * Containers
 */
import ErrorBoundary from "components/ErrorBoundary";
import Header from "containers/Header";
import Footer from "containers/Footer";

/**
 * Data & Constants
 */
import {
  defaultMenuItems,
  // defaultSocialItems,
  // defaultMediaQuery,
} from "core/constants";
// const { xs, sm, md, lg, xl } = defaultMediaQuery;

export const Vertical = (props) => {
  return (
    <GeistProvider theme={GNW_Theme}>
      <CssBaseline />

      <Header
        navMenu={defaultMenuItems}
        // socialMenu={defaultSocialItems}
      />

      <ErrorBoundary>{props.children}</ErrorBoundary>

      {props.noFooter ? null : <Footer bg="dark" />}
    </GeistProvider>
  );
};

export const getLayout = (page) => <Vertical>{page}</Vertical>;
