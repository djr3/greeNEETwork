// ------------------------------------------------
// PAGE Main Section
// ------------------------------------------------
import React, { ReactNode, CSSProperties } from "react";
import { MetaTags } from "components/MetaTags";
import { TMetaTags } from "interfaces";
import { defaultMetaTags } from "core/constants";

/**
 * PAGE Layout // Inversion of Control
 */
import { SiteLayout } from "layouts";
import { motion } from "framer-motion";
import { useStyletron } from "styletron-react";

/**
 * PAGE Types & Utils
 */
type MainProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  metaTags?: TMetaTags;
};

const PageMain: React.FC<MainProps> = (props) => {
  const { id, children, className, metaTags, style, ...rest } = props;
  const [css] = useStyletron();
  const meta = { ...defaultMetaTags, ...metaTags };

  return (
    <motion.main
      id={id || "main"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        css({
          paddingBottom: "5rem",
          paddingTop: "6rem",
          zIndex: -1,
          ":after": {
            content: "",
            display: "table",
            clear: "both",
          },
          ...style,
        }) + ` ${className}`
      }
      {...rest}
    >
      {meta && <MetaTags tags={meta} />}
      {children}
    </motion.main>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default PageMain;
