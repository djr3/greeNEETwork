// ------------------------------------------------
// PAGE Header Section
// ------------------------------------------------
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Container components
// import { MultiboxMenu } from "components/MultiboxMenu";
import { SocialMenu } from "components/Social";
import { Image } from "components/Image";

// Container stylesheets
import { useStyletron } from "styletron-react";
import { Div, Icon } from "atomize";

// Container animation
import { motion } from "framer-motion";

// Typings
import { PageHeaderProps } from "./types";

// Container animation variants
import { variants } from "./animation";

export const AniHeader: React.FC<PageHeaderProps> = (props) => {
  const { navMenu, socialMenu, className } = props;

  // Container state & hooks
  const router = useRouter();
  const [css] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  // User Interaction Handlers
  const handleRouteChange = () => {
    if (isOpen) setIsOpen(false);
  };

  React.useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [isOpen]);

  const renderItem = (item) => (
    <motion.li
      key={item.name}
      className={css({ minHeight: "2.5rem" })}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          display: "block",
          transition: {
            y: { stiffness: 1500, velocity: -300 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          display: "none",
          transition: {
            y: { stiffness: 1500 },
          },
        },
      }}
    >
      <Link href={item.link} as={item.link}>
        <a className={css({ color: "#fff" })}>{item.name}</a>
      </Link>
    </motion.li>
  );

  return (
    <motion.header
      animate={isOpen ? "open" : "closed"}
      className={[
        css({
          height: "4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
          width: "100%",
        }),
        className,
      ].join(" ")}
    >
      <Div bg="#799d43" d="flex" align="center" h="4rem" w="auto" maxW="100px">
        <a href="/home">
          <Image
            alt="greeNEETwork Logo"
            src="/img/logo-t.png"
            key="logo"
            className={css({
              backgroundPosition: "0 20px",
              width: "150px",
            })}
          />
        </a>
      </Div>

      {socialMenu && (
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
      )}

      {/* <MultiboxMenu /> */}

      <Div
        h="38%"
        zIndex={10}
        pos="absolute"
        className={css({
          // filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))",
          right: 0,
          top: 0,
          maxWidth: "250%",
          fontWeight: 600,
          fontSize: "1.25rem",
        })}
      >
        <nav
          className={css({
            zIndex: "inherit",
            color: "#fff",
            textAlign: "right",
            // margin: "80px 30px",
            position: "relative",
            top: "5rem",
            right: "2rem",
          })}
        >
          <motion.ul
            id="menu-items"
            className={css({ listStyle: "none" })}
            variants={variants.menu}
          >
            {navMenu.map((item) => renderItem(item))}
          </motion.ul>
        </nav>
        <motion.div
          initial={isOpen}
          animate={isOpen ? "open" : "closed"}
          className={css({
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            right: 0,
            background: "#ABC77F",
          })}
          variants={variants.background}
        />
      </Div>

      <button
        id="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Menu"
        className={css({
          background: "#ABC77F",
          zIndex: 1000,
          borderRadius: "50% 0 50% 50%",
          height: "4rem",
          width: "4rem",
          padding: ".5rem",
          // marginRight: ".5rem",
        })}
      >
        <Icon name={isOpen ? "Close" : "Menu"} size="32px" color="#FFF" />
      </button>
    </motion.header>
  );
};
