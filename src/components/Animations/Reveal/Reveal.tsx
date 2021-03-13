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

  const { className, tag, ...rest } = props;

  return React.createElement(
    motion[tag],
    {
      className: String(className)
        .split(" ")
        .concat("reveal-effect", isVisible && !isReduced ? "animated" : "")
        .join(" "),
      ref: domRef,
      ...rest,
    },
    props.children
  );
};
