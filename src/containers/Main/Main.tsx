// ------------------------------------------------
// PAGE Main Section
// ------------------------------------------------
import React, { ReactNode, CSSProperties } from "react";
import { MetaTags } from "@/components/MetaTags";
import { TMetaTags } from "@/interfaces";

/**
 * PAGE Layout // Inversion of Control
 */
import { SiteLayout } from "@/layouts";
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
  return (
    <motion.main
      id={id || "main"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        css({
          paddingBottom: "70px",
          zIndex: -1,
          ...style,
        }) + ` ${className}`
      }
      {...rest}
    >
      {metaTags && <MetaTags tags={metaTags} />}
      {children}
    </motion.main>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default PageMain;
