import { createElement, FC, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import cn from "classnames";
import styles from "./BlockReveal.module.scss";

type BlockRevealProps = {
  dir?: "l2r" | "r2l" | "t2b" | "b2t";
  color?: string;
  delay?: number;
  duration?: number;
  tag?: string;
  className?: string;
};

export const BlockReveal: FC<BlockRevealProps> = ({
  dir = "l2r",
  tag = "div",
  delay = 0.6,
  duration = 0.9,
  color = "#000",
  className,
  children,
}) => {
  const [isVisible, setVisible] = useState(false);

  const isReduced = useReducedMotion();
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }
  }, [isVisible]);

  return (
    <span ref={domRef} className={cn(styles.br, className)}>
      {createElement(
        // motion[tag],
        tag,
        {
          className:
            isVisible && !isReduced ? styles["br__element"] : undefined,
          style: {
            animationDelay: `${delay + duration / 2}s`,
          },
        },
        children
      )}
      <span
        className={
          isVisible && !isReduced
            ? cn(styles["br__block"], styles[`br__block--${dir}`])
            : undefined
        }
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: color,
        }}
      />
    </span>
  );
};
