// ------------------------------------------------
// PAGE Header Section
// ------------------------------------------------
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { menuItem } from "interfaces";

// Container components
import { SocialMenu, TSocialMenu } from "components/Social";
import { Image } from "components/Image";

// Container stylesheets
import { useStyletron } from "styletron-react";
import { Div, Icon } from "atomize";

// Container animation
import { motion, useCycle } from "framer-motion";

export type PageHeaderProps = {
  navMenu: menuItem[];
  socialMenu?: TSocialMenu;
  onClick?: any;
  className?: string | undefined;
};

export const Header: React.FC<PageHeaderProps> = (props) => {
  const { navMenu, socialMenu, className } = props;

  const router = useRouter();
  const [css] = useStyletron();
  const [isOpen, toggleOpen] = useCycle(true, false);

  const handleRouteChange = () => {
    toggleOpen();
    // if (isOpen) {
    //   toggleOpen();
    // }
  };

  React.useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [isOpen]);

  const renderItem = (item) => (
    <motion.li
      key={item.name}
      className={css({ minHeight: "2.5rem", align: "center" })}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1500, velocity: -300 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1500 },
          },
        },
      }}
    >
      <Link href={item.link}>
        <a>{item.name}</a>
      </Link>
    </motion.li>
  );

  return (
    <Div
      tag="header"
      className={`${css({
        display: "grid",
        height: "100%",
        // padding: ".5rem",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "80px 1fr 80px",
        gridTemplateAreas: '"app_logo" "app_nav" "app_copy"',
      })} ${className}`}
    >
      <div
        className={css({
          display: "flex",
          height: "100%",
          width: "auto",
          alignItems: "center",
        })}
      >
        <a href="/">
          <Image alt="greeNEETwork Logo" src="/img/logo.png" key="logo" />
        </a>
      </div>

      <Div
        // shadow={3}
        m=".5rem"
        // p=".5rem"
        className={css({
          height: "62%",
          // backgroundColor: "#ececec",
          // borderRadius: "1rem",
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          fontWeight: 600,
        })}
      >
        <motion.nav initial={isOpen} animate={isOpen ? "open" : "closed"}>
          <motion.ul
            id="menu-items"
            className={css({ textAlign: "center" })}
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {navMenu.map((item) => renderItem(item))}
          </motion.ul>
        </motion.nav>

        {socialMenu && (
          <SocialMenu type="icons" menu={socialMenu} justify="space-evenly" />
        )}
      </Div>

      <div
        className={css({
          fontSize: ".75rem",
          display: "flex",
          alignItems: "center",
          padding: ".5rem",
          backgroundColor: "#799d43",
          width: "100%",
          height: "100%",
        })}
      >
        <button
          id="menu-icon"
          onClick={() => toggleOpen()}
          aria-label="Open Menu"
          className={css({
            width: "100%",
            height: "100%",
            background: "transparent",
          })}
        >
          <Icon name={isOpen ? "Close" : "Menu"} size="36px" />
        </button>
      </div>
    </Div>
  );
};
