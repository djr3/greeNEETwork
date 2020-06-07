import { ReactChildren, ReactElement, ReactNodeArray } from "react";

export interface UserPropTypes {
  /**
   * Carousel react items.
   */
  children: Element[];

  /**
   * Number of cards to show.
   */
  numberOfCards?: number;

  /**
   * Space between carousel items.
   */
  gutter?: number;

  /**
   * If true a slither of next item will be showed.
   */
  showSlither?: boolean;

  /**
   * If true first and last items will have twice the space
   */
  firstAndLastGutter: boolean;

  /**
   * Enable placeholder items while data loads
   */
  enablePlaceholder: boolean;

  /**
   * Placeholder item. Ignored if enablePlaceholder is false.
   */
  placeholderItem?: ReactElement;

  /**
   * Number of placeholder items. Ignored if enablePlaceholder is false.
   */
  numberOfPlaceholderItems?: number;

  /**
   * This is called when we want to change the active item.
   * Right now we will never call this unless a left or right chevrons are clicked.
   */
  requestToChangeActive: Function;

  /**
   * This gives you the control to change the current active item.
   */
  activeItemIndex: number;

  /**
   * The active item position.
   */
  activePosition: "left" | "center" | "right";

  /**
   * Right chevron element. If passed `requestToChangeActive` must be set.
   */
  rightChevron?: ReactElement | string;

  /**
   * Left chevron element. If passed `requestToChangeActive` must be set.
   */
  leftChevron?: ReactElement | string;

  /**
   * Chevron width.
   */
  chevronWidth?: number;

  /**
   * If true the chevron will be outside the carousel.
   */
  outsideChevron?: boolean;

  /**
   * Whether or not to always show chevrons
   */
  alwaysShowChevrons: boolean;

  /**
   * Number of slides to scroll when clicked on right or left chevron.
   */
  slidesToScroll: number;

  /**
   * Disabling swipe on touch devices
   */
  disableSwipe: boolean;

  /**
   * React motion configurations.
   * [More about this here](https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig)
   */
  springConfig: {
    stiffness?: number;
    damping?: number;
    precision?: number;
  };

  /**
   * Function to be used to watch carousel state
   */
  onActiveStateChange: Function;

  classes: {
    wrapper?: string;
    itemsWrapper?: string;
    itemsInnerWrapper?: string;
    itemWrapper?: string;
    rightChevronWrapper?: string;
    leftChevronWrapper?: string;
  };

  /**
   * Enables infinite loop
   */
  infiniteLoop?: boolean;

  /**
   * Can be used change translateX on the spot
   */
  calculateActualTranslateX: Function;
}

export interface ItemsCarouselBaseProps extends UserPropTypes {
  // Props coming from withCarouselValues
  items: ReactNodeArray;
  activeItemTranslateX: number;
  nextItemIndex: number;
  previousItemIndex: number;
  // Props coming from withContainerWidth
  containerWidth: number;
  measureRef: Function | { current: object };
  // Props coming from withSwipe
  touchRelativeX: number;
  onWrapperTouchStart?: any;
  onWrapperTouchEnd?: any;
  onWrapperTouchMove?: any;
}

// ItemsCarouselBase.propTypes = {
//   ...userPropTypes,
//   // Props coming from withCarouselValues
//   items: arrayOf(node).isRequired,
//   activeItemTranslateX: number.isRequired,
//   nextItemIndex: number.isRequired,
//   previousItemIndex: number.isRequired,
//   // Props coming from withContainerWidth
//   containerWidth: number.isRequired,
//   measureRef: oneOfType([
//     func, // for legacy refs
//     shape({ current: object }),
//   ]).isRequired,
//   // Props coming from withSwipe
//   touchRelativeX: number.isRequired,
//   onWrapperTouchStart: func,
//   onWrapperTouchEnd: func,
//   onWrapperTouchMove: func,
// };
