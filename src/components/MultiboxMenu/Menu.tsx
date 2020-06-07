import React from "react";
import { styled } from "styletron-react";
import { HoverProps } from "./types";

export const MenuItemInner = styled("div", {
  overflow: "hidden",
  transform: "translate3d(100%,0,0)",
  height: "100%",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "black",
  "@media screen and (min-width: 53em)": {
    alignItems: "center",
  },
});

export const MenuItem = styled("div", {
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "@media screen and (min-width: 53em)": {
    height: "100%",
  },
});

export const Menu = styled<"nav", HoverProps>("nav", (props) => ({
  textAlign: "center",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 200,
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "repeat(3,33.33%)",
  pointerEvents: props.isOpen ? "auto" : "none",
  "@media screen and (min-width: 53em)": {
    gridTemplateColumns: "20% 30% 50%",
    gridTemplateRows: "60% 40%",
    gridTemplateAreas: `"item3 item2 item1" "item4 item5 item1"`,
  },
}));
