/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useState, useRef } from "react";
import { defaultBreakPoints } from "./constants";
import type {
  DimensionObject,
  UseDimensionsHook,
  UseDimensionsArgs,
} from "@types";

/**
 * Utility Functions
 */
export function getBreakpoint(size) {
  switch (size) {
    case size < defaultBreakPoints.sm:
      return "xs";
    case size >= defaultBreakPoints.sm && size <= defaultBreakPoints.md:
      return "sm";
    case size >= defaultBreakPoints.md && size <= defaultBreakPoints.lg:
      return "md";
    case size >= defaultBreakPoints.lg && size <= defaultBreakPoints.xl:
      return "lg";
    case size >= defaultBreakPoints.xl:
      return "xl";
  }
}

function getWindowDimensions() {
  if (process.browser) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else return {};
}

/**
 * React Hooks
 */
export function useBreakpoints(track = false) {
  if (typeof window === "undefined") {
    return;
  }
  const [windowSize, setWindowSize] = useState(
    getBreakpoint(getWindowDimensions())
  );

  const trackChange = track ? [windowSize] : [];

  useEffect(() => {
    // const isClient = typeof window === "object";

    // if (!isClient) {
    //   return;
    // }

    function handleResize() {
      setWindowSize(getBreakpoint(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, trackChange); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export function useComponentDimensions(ref) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function getNodeDimensions(node: HTMLElement): DimensionObject {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect!.top,
    left: "y" in rect ? rect.y : rect!.left,
    x: "x" in rect ? rect.x : rect!.left,
    y: "y" in rect ? rect.y : rect!.top,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export function useDimensions({
  liveMeasure = true,
}: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getNodeDimensions(node))
        );
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node]);

  return [ref, dimensions, node];
}
