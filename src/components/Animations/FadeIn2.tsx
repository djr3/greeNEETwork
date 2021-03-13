import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FadeIn2 = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  ...props
}) => {
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.fromTo(
      compRef.current,
      {
        ...fadeDirection,
        opacity: 0,
        delay,
      },
      {
        x: ["left", "right"].includes(fadeDirection) ? 0 : null,
        y: ["up", "down"].includes(fadeDirection) ? 0 : null,
        opacity: 1,
        duration: 1,
      }
    );
  }, [compRef, fadeDirection, delay]);
  return (
    <div ref={compRef} {...props}>
      {children}
    </div>
  );
};
