import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  tag?: string;
  dir?: "up" | "down" | "left" | "right";
  distance?: string | number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  tag = "div",
  dir = "up",
  distance = "10rem",
  children,
  ...rest
}) => {
  const [isVisible, setVisible] = useState(false);

  const isReduced = useReducedMotion();
  const domRef = useRef();

  const setMove = (dis) => {
    return dir === "down" || dir === "right" ? dis : `-${dis}`;
  };

  const options = {
    initial: isVisible ? "hidden" : "visible",
    animate: isVisible ? "visible" : "hidden",
    variants: {
      hidden: {
        opacity: 0,
        x: isReduced || isVisible ? 0 : setMove(distance),
        y: isReduced || isVisible ? 0 : setMove(distance),
        transition: {
          when: "afterChildren",
        },
      },
      visible: {
        opacity: 1,
        x: ["left", "right"].includes(dir) ? 0 : undefined,
        y: ["up", "down"].includes(dir) ? 0 : undefined,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.6,
        },
      },
    },
    transition: {
      duration: { opacity: 1.2, transform: 0.6, visibility: 1.2 },
      ease: "easeOut",
    },
    ref: domRef,
    ...rest,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    typeof domRef.current === "object" && observer.observe(domRef.current);
    return () =>
      typeof domRef.current === "object" && observer.unobserve(domRef.current);
  }, [isVisible]);

  return React.createElement(motion[tag], options, children);
};
