/**
 * App Theme
 */
import { ThemeProvider, StyleReset } from "atomize";
import { useStyletron } from "styletron-react";
import { theme } from "styletron";

/**
 * Containers
 */
import { AniHeader } from "containers/Header";
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
  const [css] = useStyletron();

  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <AniHeader
        className={css({
          position: "fixed",
          top: 0,
          zIndex: 1000,
        })}
        navMenu={defaultMenuItems}
        // socialMenu={defaultSocialItems}
      />
      {props.children}
      <Footer bg="dark" />
    </ThemeProvider>
  );
};

export const getLayout = (page) => <Vertical>{page}</Vertical>;
