import React, { Component } from "react";
import { motion } from "framer-motion";
import {
  CarouselWrapper,
  CarouselRightChevron,
  CarouselLeftChevron,
  SliderItemsWrapper,
  SliderItem,
  Wrapper,
} from "./Styled";
import {
  calculateItemWidth,
  calculateItemLeftGutter,
  calculateItemRightGutter,
  showLeftChevron,
  showRightChevron,
  calculateNextIndex,
  calculatePreviousIndex,
} from "./helpers";
import type { ItemsCarouselBaseProps } from "./types";

class ItemsCarouselBase extends Component<ItemsCarouselBaseProps> {
  static defaultProps = {
    onWrapperTouchStart: null,
    onWrapperTouchEnd: null,
    onWrapperTouchMove: null,
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.onActiveStateChange &&
      this.props.activeItemIndex !== prevProps.activeItemIndex
    ) {
      this.props.onActiveStateChange({
        ...this.getScrollState(),
      });
    }
  }

  getScrollState = () => {
    let {
      numberOfCards,
      activeItemIndex,
      activePosition,
      slidesToScroll,
      items,
    } = this.props;
    return {
      isLastScroll: !showRightChevron({
        activeItemIndex,
        activePosition,
        numberOfChildren: items.length,
        numberOfCards,
        slidesToScroll,
      }),
      isFirstScroll: !showLeftChevron({
        activeItemIndex,
        activePosition,
        numberOfChildren: items.length,
        numberOfCards,
        slidesToScroll,
      }),
    };
  };

  renderList({ items, translateX, containerWidth, measureRef }) {
    const {
      gutter,
      numberOfCards,
      firstAndLastGutter,
      showSlither,
      classes,
      calculateActualTranslateX,
    } = this.props;

    const actualTranslateX = calculateActualTranslateX(translateX);

    return (
      <Wrapper className={classes.itemsWrapper}>
        <SliderItemsWrapper
          ref={measureRef}
          style={{
            transform: `translateX(${actualTranslateX * -1}px)`,
          }}
          className={classes.itemsInnerWrapper}
        >
          {items.map((child, index) => (
            <SliderItem
              key={index}
              className={classes.itemWrapper}
              width={calculateItemWidth({
                firstAndLastGutter,
                containerWidth,
                gutter,
                numberOfCards,
                showSlither,
              })}
              leftGutter={calculateItemLeftGutter({
                index,
                firstAndLastGutter,
                gutter,
              })}
              rightGutter={calculateItemRightGutter({
                index,
                firstAndLastGutter,
                gutter,
                numberOfChildren: items.length,
              })}
            >
              {child}
            </SliderItem>
          ))}
        </SliderItemsWrapper>
      </Wrapper>
    );
  }

  render() {
    let {
      // Props coming from withContainerWidth
      containerWidth,
      measureRef,
      // Props coming from withSwipe
      touchRelativeX,
      onWrapperTouchStart,
      onWrapperTouchEnd,
      onWrapperTouchMove,
      // Props coming from user
      gutter,
      numberOfCards,
      firstAndLastGutter,
      activePosition,
      springConfig,
      showSlither,
      rightChevron,
      leftChevron,
      chevronWidth,
      outsideChevron,
      requestToChangeActive,
      slidesToScroll,
      alwaysShowChevrons,
      classes,
      items,
      activeItemTranslateX,
      nextItemIndex,
      previousItemIndex,
    } = this.props;

    const { isFirstScroll, isLastScroll } = this.getScrollState();
    const _showRightChevron =
      rightChevron && (alwaysShowChevrons || !isLastScroll);
    const _showLeftChevron =
      leftChevron && (alwaysShowChevrons || !isFirstScroll);

    return (
      <CarouselWrapper
        onTouchStart={onWrapperTouchStart}
        onTouchEnd={onWrapperTouchEnd}
        onTouchMove={onWrapperTouchMove}
        className={classes.wrapper}
      >
        {/* <Motion
          defaultStyle={{
            translateX: activeItemTranslateX,
          }}
          style={{
            translateX: spring(
              activeItemTranslateX + touchRelativeX,
              springConfig
            ),
          }}
          children={({ translateX }) =>
            this.renderList({
              items,
              measureRef,
              containerWidth,
              translateX,
            })
          }
        /> */}
        {_showRightChevron && (
          <CarouselRightChevron
            chevronWidth={chevronWidth}
            outsideChevron={outsideChevron}
            className={classes.rightChevronWrapper}
            onClick={() => requestToChangeActive(nextItemIndex)}
          >
            {rightChevron}
          </CarouselRightChevron>
        )}
        {_showLeftChevron && (
          <CarouselLeftChevron
            chevronWidth={chevronWidth}
            outsideChevron={outsideChevron}
            className={classes.leftChevronWrapper}
            onClick={() => requestToChangeActive(previousItemIndex)}
          >
            {leftChevron}
          </CarouselLeftChevron>
        )}
      </CarouselWrapper>
    );
  }
}

export default ItemsCarouselBase;
