// ------------------------------------------------
// PAGE Header Section
// ------------------------------------------------
import React from "react";
import Link from "next/link";

// Container components
import { Menu } from "components/MultiboxMenu";

// Typings
import { PageHeaderProps } from "./types";

import styles from "./Header.module.sass";

const Header: React.FC<PageHeaderProps> = (props) => {
  // const { navMenu, socialMenu, style } = props;

  return (
    <header className={styles.Main}>
      <Link href="/" prefetch={false}>
        <div className={styles.logo}></div>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
