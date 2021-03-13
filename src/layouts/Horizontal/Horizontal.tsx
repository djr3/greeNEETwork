/**
 * App Theme
 */
import { GeistProvider, CssBaseline } from "@geist-ui/react";

/**
 * Containers
 */
import Header from "containers/Header";

/**
 * Data & Constants
 */
import { defaultMenuItems } from "core/constants";
// const { xs, sm, md, lg, xl } = defaultMediaQuery;

export const Horizontal = (props) => {
  // const [css] = useStyletron();

  return (
    <GeistProvider>
      <CssBaseline />
      <Header navMenu={defaultMenuItems} />
      {props.children}
    </GeistProvider>
  );
};

export const getLayout = (page) => <Horizontal>{page}</Horizontal>;
