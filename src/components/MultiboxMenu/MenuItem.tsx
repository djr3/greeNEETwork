import React from "react";

// import { motion } from "framer-motion";
// import { menuItems } from "./variants";

interface MenuItemProps extends React.PropsWithChildren<any> {
  direction: "bt" | "lr" | "rl" | "tb";
  refs: any;
}

import styles from "./Menu.module.sass";

const MenuItem = ({
  children,
  className,
  direction,
  refs,
  style,
}: MenuItemProps) => {
  return (
    // <motion.div
    //   className={styles.Item + " " + className}
    //   style={style}
    //   custom={direction}
    //   variants={menuItems.outer}
    // >
    //   <motion.div className={styles.ItemInner} variants={menuItems.inner}>
    //     {children}
    //   </motion.div>
    // </motion.div>
    <div
      ref={refs.outer}
      className={styles.Item + " " + className}
      data-direction={direction}
      style={style}
    >
      <div ref={refs.inner} className={styles.ItemInner}>
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
