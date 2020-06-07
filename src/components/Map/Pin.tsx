import React, { PureComponent } from "react";
import { Marker } from "react-map-gl";

import { MAPBOX } from "./config";
import { getCoordinates } from "./utils";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 32;

// Important for perf: the markers never change, avoid rerender when the map viewport changes

export class Pin extends PureComponent<
  React.PropsWithChildren<{
    place: any;
    onClick?: any;
  }>
> {
  render() {
    const { place, children, onClick } = this.props;

    return (
      <Marker
        // key={`marker-${place.id}`}
        // longitude={getCoordinates(place.geo_json, "long")}
        // latitude={getCoordinates(place.geo_json, "lat")}
        {...getCoordinates(place)}
      >
        {children ? (
          <>{children}</>
        ) : (
          <button
            style={{
              display: "inline",
              background: "transparent",
              width: SIZE + "px",
              height: SIZE + "px",
            }}
            onClickCapture={(e) => {
              e.preventDefault();
              onClick ? onClick(place) : null;
            }}
          >
            <svg
              height={SIZE}
              viewBox="0 0 24 24"
              style={{
                cursor: "pointer",
                fill: place.tipologie
                  ? MAPBOX.markers.colors[place.tipologie[0]]
                  : "#799d43",
                stroke: "none",
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
              }}
            >
              <path d={ICON} />
            </svg>
          </button>
        )}
      </Marker>
    );
  }
}
