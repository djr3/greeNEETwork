// ------------------------------------------------
// PAGE Main Section
// ------------------------------------------------
import React, { ReactNode, CSSProperties } from "react";
import { defaultMetaTags } from "core/constants";
import { MetaTags } from "components/MetaTags";
import type { TMetaTags } from "@types";
import cn from "classnames";

/**
 * PAGE Layout // Inversion of Control
 */
// import { Vertical } from "layouts";
import { motion } from "framer-motion";

/**
 * PAGE Types & Utils
 */
type MainProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  metaTags?: Partial<TMetaTags>;
};

import styles from "./Main.module.sass";

const PageMain: React.FC<MainProps> = (props) => {
  const { id, children, className, metaTags, ...rest } = props;

  return (
    <motion.main
      id={id || "main"}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className={cn(styles.main, className)}
      {...rest}
    >
      <MetaTags tags={{ ...defaultMetaTags, ...metaTags }} />
      {children}
    </motion.main>
  );
};

// export const getLayout = (page) => <Vertical>{page}</Vertical>;

export default PageMain;
