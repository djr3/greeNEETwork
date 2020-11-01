import { useMediaQuery } from "@geist-ui/react";
import {
  ResponsiveBreakpoint,
  ResponsiveOptions,
} from "@geist-ui/react/dist/use-media-query/use-media-query";

const breakpoints: ResponsiveBreakpoint[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "mobile",
];

export const getMediaQuery = (options?: ResponsiveOptions) => {
  const [isXS, isSM, isMD, isLG, isXL, isMobile] = breakpoints.map((i) =>
    useMediaQuery(i, options)
  );
  return { isXS, isSM, isMD, isLG, isXL, isMobile };
};
