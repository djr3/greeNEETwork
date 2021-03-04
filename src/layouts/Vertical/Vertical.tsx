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
    <GeistProvider themes={[GNW_Theme]} themeType="gnw_light">
      <CssBaseline />

      <Header
        navMenu={defaultMenuItems}
        // socialMenu={defaultSocialItems}
      />

      {/* <ErrorBoundary></ErrorBoundary> */}
      {props.children}

      {props.noFooter ? null : <Footer bg="dark" />}
    </GeistProvider>
  );
};

export const getLayout = (page) => <Vertical>{page}</Vertical>;
