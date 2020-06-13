import { createElement, FC, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./BlockReveal.module.scss";

type BlockRevealProps = {
  color?: string;
  delay?: number;
  duration?: number;
  tag?: string;
};

export const BlockReveal: FC<BlockRevealProps> = ({
  tag = "div",
  delay = 1,
  duration = 0.9,
  color = "#000",
  children,
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

  return (
    <span ref={domRef} className={styles.br}>
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
        className={isVisible && !isReduced ? styles["br__block"] : undefined}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: color,
        }}
      />
    </span>
  );
};
