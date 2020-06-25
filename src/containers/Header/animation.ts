export const variants = {
  background: {
    open: {
      clipPath: `circle(300px at calc(100% - 32px) 32px )`,
      transition: {
        duration: 350,
        type: "spring",
        stiffness: 50,
        // restDelta: 2,
      },
    },
    closed: {
      clipPath: `circle(24px at calc(100% - 32px) 32px )`,
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
      opacity: 1,
      // display: "block",
      transition: {
        delay: 0.25,
        staggerChildren: 0.07,
        // delayChildren: 0.2,
        delayChildren: 0.25,
      },
    },
    closed: {
      opacity: 0,
      // display: "none",
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  item: {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  },
};
