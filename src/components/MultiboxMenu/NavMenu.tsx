import React from "react";
import Link from "next/link";

import styles from "./Menu.module.sass";

const NavMenu = ({ navMenu, refs }) => {
  return (
    <nav className={styles.MainMenu} ref={refs.navMenu}>
      {navMenu.map((item, idx) => (
        <Link
          key={"Navitem_" + idx}
          href={item.link}
          as={item.link}
          prefetch={false}
        >
          <a className={styles.MainItem} ref={refs.navMenuItems[idx]}>
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
