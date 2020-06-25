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

export const Horizontal = (props) => {
  const [css] = useStyletron();

  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <AniHeader
        className={css({
          position: "sticky",
          top: 0,
          zIndex: 1000,
        })}
        navMenu={defaultMenuItems}
        // socialMenu={defaultSocialItems}
      />
      {props.children}
      <Footer
        bg="dark"
        className={css({
          position: "fixed",
          bottom: 0,
          zIndex: 1000,
        })}
      />
    </ThemeProvider>
  );
};

export const getLayout = (page) => <Horizontal>{page}</Horizontal>;
