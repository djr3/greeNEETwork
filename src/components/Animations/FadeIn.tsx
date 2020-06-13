import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  tag?: string;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  tag = "div",
  children,
  ...rest
}) => {
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

  const options = {
    initial: isVisible ? "hidden" : "visible",
    animate: isVisible ? "visible" : "hidden",
    variants: {
      hidden: {
        opacity: 0,
        visibility: "hidden",
        y: isReduced ? undefined : isVisible ? "10vh" : "-10vh",
        transition: {
          when: "afterChildren",
        },
      },
      visible: {
        opacity: 1,
        visibility: "visible",
        y: isReduced ? undefined : "0vh",
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

  return React.createElement(motion[tag], options, children);
};
