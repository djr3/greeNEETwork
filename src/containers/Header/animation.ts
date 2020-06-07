export const variants = {
  background: {
    open: {
      clipPath: `circle(300px at calc(100% - 40px) 35px )`,
      transition: {
        duration: 500,
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: `circle(30px at calc(100% - 40px) 35px )`,
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
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
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
