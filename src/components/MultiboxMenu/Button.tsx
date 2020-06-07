import React from "react";
import { styled } from "styletron-react";
import { HoverProps } from "./types";

export const Button = styled<"button", HoverProps>("button", (props) => ({
  // Base Style
  background: "none",
  border: 0,
  color: "#fff",
  cursor: "pointer",
  padding: 0,
  // Overrides
  position: "absolute",
  top: "1.5rem",
  right: "1.75rem",
  zIndex: 1000,
  // Interaction
  pointerEvents: props.isOpen ? "none" : "auto",
}));
