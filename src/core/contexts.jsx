import React, { createContext, useReducer, useRef } from "react";
import { defaultMenuItems } from "./constants";
import { times } from "./utils";

export const AnimationContext = createContext(undefined);

const initialState = {
  navMenu: [],
  navMenuItems: [],
  menuBoxes: Array(5).fill({ inner: useRef(), outer: useRef() }),
};

// Create Refs for elements
const items = [];
times(5)(() => items.push({ inner: useRef(), outer: useRef() }));
const navMenu = useRef();
const navItems = [];
times(defaultMenuItems.length)(() => navItems.push(useRef()));

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { refs: [...state.refs, action.payload] };

    case "REMOVE":
      return { refs: state.refs.filter() };

    case "START":
      return { isAnimating: true };

    case "STOP":
      return { isAnimating: false };

    default:
      throw new Error("No case in AnimationContext reducer");
  }
};

export const AnimationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnimationContext.Provider
      value={[state, dispatch]}
    ></AnimationContext.Provider>
  );
};
