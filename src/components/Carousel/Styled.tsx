import { styled, withStyle } from "styletron-react";

interface StyledDiv {
  [elem: string]: any;
}

export const CarouselWrapper = styled<"div", StyledDiv>("div", (props) => ({
  position: "relative",
  height: props.height ? `${props.height}px` : "auto",
}));

export const Wrapper = styled("div", {
  width: "100%",
  overflowX: "hidden",
});

export const SliderItemsWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
});

export const SliderItem = styled<"div", StyledDiv>("div", (props) => ({
  width: `${props.width}px`,
  flexShrink: 0,
  marginRight: `${props.rightGutter}px`,
  marginLeft: `${props.leftGutter}px`,
}));

export const CarouselChevron = styled<"div", StyledDiv>("div", (props) => ({
  position: "absolute",
  height: "100%",
  width: props.chevronWidth + 1 + "px",
  cursor: "pointer",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CarouselRightChevron = withStyle<any, StyledDiv>(
  CarouselChevron,
  (props) => ({
    right: `-${props.outsideChevron ? props.chevronWidth : 0}px`,
  })
);

export const CarouselLeftChevron = withStyle<any, StyledDiv>(
  CarouselChevron,
  (props) => ({
    left: `-${props.outsideChevron ? props.chevronWidth : 0}px`,
  })
);
