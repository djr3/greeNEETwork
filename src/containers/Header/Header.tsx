// ------------------------------------------------
// PAGE Header Section
// ------------------------------------------------
import React from "react";
import Link from "next/link";

// Container components
import { Menu } from "components/MultiboxMenu";
// import { SocialMenu } from "components/Social";
// import { Image } from "components/Image";
// import Icon from "components/Icon";

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
      {/* {socialMenu && (
        <SocialMenu
          type="icons"
          menu={socialMenu}
          h="38%"
          d="flex"
          flexDir="column"
          align="center"
          justify="space-evenly"
          // itemProps={{ h: "40px" }}
          color="#fff"
        />
      )} */}
    </header>
  );
};

export default Header;
