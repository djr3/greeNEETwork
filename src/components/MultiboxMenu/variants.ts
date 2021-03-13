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
          break;
        case "tb":
          config.y = "100%";
          config.x = 0;
          break;
        case "lr":
          config.x = "100%";
          break;
        case "rl":
          config.x = "-100%";
          break;
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
          break;
        case "tb":
          config.y = "-100%";
          break;
        case "lr":
          config.x = "-100%";
          break;
        case "rl":
          config.x = "100%";
          break;
        default:
          break;
      }
      return config;
    },
    closed: { x: 0, y: 0 },
  },
};
