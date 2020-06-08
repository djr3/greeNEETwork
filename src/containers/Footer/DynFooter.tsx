import React, { useRef } from "react";
// import Link from "next/link";
import { useRouter } from "next/router";
import { Credits } from "components/Credits/";

// Container stylesheets
import { useStyletron } from "styletron-react";
import { Icon } from "atomize";

// Container animation
import { motion, useCycle } from "framer-motion";
import { useComponentDimensions } from "core/hooks";

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = (props) => {
  // Container props
  const { className } = props;

  // Container state & hooks
  const router = useRouter();
  const [css] = useStyletron();
  const [isOpen, toggleOpen] = useCycle(false, true);

  // Dynamic properties
  const footerRef = useRef(null);
  const { width, height } = useComponentDimensions(footerRef);

  // User Interaction Handlers
  const handleRouteChange = () => {
    if (isOpen) {
      toggleOpen();
    }
  };

  React.useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [isOpen]);

  // Container animation variants
  const variants = {
    background: {
      open: (width = 1000) => ({
        clipPath: `circle(${width * 2}px at calc(100% - 30px) 40px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      }),
      closed: {
        clipPath: `circle(30px at calc(100% - 30px) 40px)`,
        transition: {
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    },
    menu: {
      open: {
        open: { opacity: 1 },
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        closed: { opacity: 0 },
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    },
    item: {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: -10 },
    },
  };

  const footerMenu = [
    { name: "Privacy", link: "/privacy" },
    { name: "Cookies", link: "/cookies" },
  ];

  return (
    <motion.footer
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`
        ${css({
          display: "flex",
          alignItems: "center",
          height: "100%",
          position: "relative",
          justifyContent: "space-evenly",
          zIndex: 10,
        })} ${className}
      `}
      custom={width}
      ref={footerRef}
    >
      {/* <motion.ul
        variants={variants.menu}
        className={css({ display: "inline-flex" })}
      >
        {footerMenu.map((item) => (
          <motion.li
            key={item.name}
            variants={variants.item}
            className={css({ marginRight: "1rem" })}
          >
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul> */}

      <Credits bg="dark" />

      {/* <Text textSize="paragraph">
        Developed by <a href="https://digitalia.net.pl">DigItalia</a>
      </Text> */}

      <motion.div
        className={css({
          position: "absolute",
          width: "100%",
          height: "100%",
          right: 0,
          background: "#4c4c4c",
          // zIndex: 1,
        })}
        variants={variants.background}
      />

      <Icon
        color="white"
        className={css({
          position: "absolute",
          top: "22.5px",
          right: "12.5px",
          // zIndex: 1,
          // bottom: "25px",
        })}
        name={isOpen ? "Close" : "Info"}
        size="35px"
        onClick={toggleOpen}
      />
    </motion.footer>
  );
};

export default Footer;
