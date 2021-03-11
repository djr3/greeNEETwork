import React, { PropsWithChildren, ReactElement } from "react";
import RMasonry from "react-masonry-css";

import styles from "./Masonry.module.sass";

interface MasProps {
  breakpointCols?: number | { default: number; [key: number]: number };
  className?: string;
  columnClassName?: string;
}

export default function Masonry(
  props: PropsWithChildren<MasProps>
): ReactElement {
  const { children, ...rest } = props;
  return (
    <RMasonry
      className={styles.grid}
      columnClassName={styles.grid_column}
      {...rest}
    >
      {children}
    </RMasonry>
  );
}
