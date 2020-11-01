import React from "react";
import styles from "./MenuIcon.module.css";

export default function MenuIcon() {
  return (
    <div className={styles.menu}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      {/* <style jsx>{`
      .hambMenu {
        height: "48px";
        width: "48px";
        position: "relative";
        margin: "auto";
        padding-top: "20px";
        border: "5px solid transparent";
        border-radius: "100%";
        transition: "0.3s";
        cursor: "pointer";
      }
    `}</style> */}
    </div>
  );
}
