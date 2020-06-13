import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import "./Reveal.module.scss";

interface RevealProps {
  className: string;
  tag: string;
}

export const Reveal: React.FC<RevealProps> = (props) => {
  const [isVisible, setVisible] = useState(false);

  const isReduced = useReducedMotion();
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, [isVisible]);

  // const { elementType, elementProps, elementChildren } = props;

  const { className, tag, ...rest } = props;

  return React.createElement(
    motion[tag],
    {
      className: String(className)
        .split(" ")
        .concat("reveal-effect", isVisible && !isReduced ? "animated" : "")
        .join(" "),
      // initial: isVisible ? "hidden" : "visible",
      // animate: isVisible ? "visible" : "hidden",
      // variants: {
      //   hidden: {},
      //   visible: {},
      // },
      // style: { float: "left", overflow: "hidden", position: "relative" },
      // transition: {
      //   duration: 1.2,
      //   ease: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      // },
      ref: domRef,
      ...rest,
    },
    props.children
  );

  // return (
  //   <motion.div
  //     className={"reveal-effect" + isVisible ? " animated" : ""}
  //     style={{ position: "relative", overflow: "hidden" }}
  //     initial={isVisible ? "hidden" : "visible"}
  //     animate={isVisible ? "visible" : "hidden"}
  //     variants={{
  //       hidden: {
  //         opacity: 0,
  //         visibility: "hidden",
  //         y: isReduced ? undefined : isVisible ? "10vh" : "-10vh",
  //         transition: {
  //           when: "afterChildren",
  //         },
  //       },
  //       visible: {
  //         opacity: 1,
  //         visibility: "visible",
  //         y: isReduced ? undefined : "0vh",
  //         transition: {
  //           when: "beforeChildren",
  //           staggerChildren: 0.3,
  //         },
  //       },
  //     }}
  //     transition={{
  //       duration: { opacity: 1.2, transform: 0.6, visibility: 1.2 },
  //       ease: "easeOut",
  //     }}
  //     ref={domRef}
  //   >
  //     {/* {React.createElement(elementType, elementProps, elementChildren)} */}
  //     {props.children}
  //   </motion.div>
  // );
};
