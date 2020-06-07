import React from "react";
import { styled } from "styletron-react";
import styles from "./Icon.module.css";

const Hamburger = styled("div", {
  height: "48px",
  width: "48px",
  position: "relative",
  margin: "auto",
  paddingTop: "20px",
  border: "5px solid transparent",
  borderRadius: "100%",
  transition: "0.3s",
  cursor: "pointer",
});

export const HamburgerIcon = () => (
  <Hamburger>
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </Hamburger>
);
