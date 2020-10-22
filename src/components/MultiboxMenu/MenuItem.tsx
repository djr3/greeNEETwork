import React from "react";

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
  // useEffect(() => {}, [animate]);
  return (
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
