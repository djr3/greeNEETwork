import React, { useState, useEffect, PropsWithChildren } from "react";
import { styled } from "styletron-react";

interface MasonryElProps {
  gutter?: string | number;
}

interface MasonryColumnProps extends MasonryElProps {
  width: string;
}

export const MasonryGrid = styled("div", (props: MasonryElProps) => ({
  display: "flex",
  width: "auto",
  marginLeft: -props.gutter || "-30px",
}));

export const MasonryColumn = styled("div", (props: MasonryColumnProps) => ({
  paddingLeft: props.gutter || "30px",
  backgroundClip: "padding-box",
  width: props.width,
}));

type BreakpointsCol = {
  default: number;
  [key: number]: number;
};

interface MasonryProps {
  breakpointCols?: string | BreakpointsCol;
  columnAttrs?: any;
}

const DEFAULT_COLUMNS = 3;

export const Masonry: React.FC<PropsWithChildren<MasonryProps>> = ({
  breakpointCols,
  children,
  columnAttrs,
  ...rest
}) => {
  // Default State
  const [columnCount, setColumnCount] = useState(
    breakpointCols && (breakpointCols as BreakpointsCol).default
      ? (breakpointCols as BreakpointsCol).default
      : parseInt(breakpointCols as string) || DEFAULT_COLUMNS
  );

  let _lastRecalculateAnimationFrame;

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", reCalculateColumnCountDebounce);
    }
    // window.addEventListener('resize', reCalculateColumnCountDebounce);
    reCalculateColumnCountDebounce();

    return () => {
      if (window) {
        return window.removeEventListener(
          "resize",
          reCalculateColumnCountDebounce
        );
      }
    };
  }, []);

  function reCalculateColumnCountDebounce() {
    if (!window || !window.requestAnimationFrame) {
      // IE10+
      reCalculateColumnCount();
      return;
    }

    if (window.cancelAnimationFrame) {
      // IE10+
      window.cancelAnimationFrame(_lastRecalculateAnimationFrame);
    }

    _lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {
      reCalculateColumnCount();
    });
  }

  function reCalculateColumnCount() {
    const windowWidth = (window && window.innerWidth) || Infinity;
    let breakpointColsObject = breakpointCols;

    // Allow passing a single number to `breakpointCols` instead of an object
    if (typeof breakpointColsObject !== "object") {
      breakpointColsObject = {
        default: parseInt(breakpointColsObject) || DEFAULT_COLUMNS,
      };
    }

    let matchedBreakpoint = Infinity;
    let columns = breakpointColsObject.default || DEFAULT_COLUMNS;

    for (const breakpoint in breakpointColsObject) {
      const optBreakpoint = parseInt(breakpoint);
      const isCurrentBreakpoint =
        optBreakpoint > 0 && windowWidth <= optBreakpoint;

      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint;
        columns = breakpointColsObject[breakpoint];
      }
    }

    columns = Math.max(1, columns || 1);

    if (columnCount !== columns) {
      setColumnCount(columns);
    }
  }

  function itemsInColumns() {
    const currentColumnCount = columnCount;
    const itemsInColumns = new Array(currentColumnCount);

    // Force children to be handled as an array
    const items = [].concat(children || []);

    for (let i = 0; i < items.length; i++) {
      const columnIndex = i % currentColumnCount;

      if (!itemsInColumns[columnIndex]) {
        itemsInColumns[columnIndex] = [];
      }

      itemsInColumns[columnIndex].push(items[i]);
    }

    return itemsInColumns;
  }

  function renderColumns() {
    const childrenInColumns = itemsInColumns();
    const columnWidth = `${100 / childrenInColumns.length}%`;

    const columnAttributes = { ...columnAttrs };

    return childrenInColumns.map((items, i) => {
      return (
        <MasonryColumn {...columnAttributes} width={columnWidth} key={i}>
          {items}
        </MasonryColumn>
      );
    });
  }

  return <MasonryGrid {...rest}>{renderColumns()}</MasonryGrid>;
};
