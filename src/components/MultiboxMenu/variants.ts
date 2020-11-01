const transitionOpen = {
  transition: {
    when: "beforeChildren",
    ease: "easeOut",
    duration: 1,
    staggerChildren: 0.3,
  },
};
const transitionClosed = {
  transition: {
    when: "afterChildren",
    ease: "easeInOut",
    duration: 1,
  },
};

export const menuItems = {
  inner: {
    open: (dir) => {
      const config: any = { ...transitionOpen };
      switch (dir) {
        case "bt":
          config.y = "-100";
          config.x = 0;
        // return { y: "-100%", x: 0, ...transitionOpen };
        case "tb":
          config.y = "100%";
          config.x = 0;
        // return { y: "100%", x: 0 };
        case "lr":
          config.x = "100%";
        // return { x: "100%" };
        case "rl":
          config.x = "-100%";
        // return { x: "-100%" };
        default:
          break;
      }
      return config;
    },
    closed: { x: 0, y: 0 },
  },
  outer: {
    open: (dir) => {
      const config: any = { ...transitionOpen };
      switch (dir) {
        case "bt":
          config.y = "100%";
        // return { y: "100%" };
        case "tb":
          config.y = "-100%";
        // return { y: "-100%" };
        case "lr":
          config.x = "-100%";
        // return { x: "-100%" };
        case "rl":
          config.x = "100%";
        // return { x: "100%" };
        default:
          break;
      }
      return config;
    },
    closed: { x: 0, y: 0 },
  },
};
