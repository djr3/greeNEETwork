// Core Components
import React, { useRef, useState, useEffect, useMemo, FC } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import useSupercluster from "use-supercluster";

// MapBox Components & Tools
import { MAPBOX, style } from "./config";
import { getCoordinates, isInBounds, reshapePlaces } from "./utils";

// Map Addons
import { Pin } from "./Pin";
// import { MapPopup } from "./MapPopup"

/**
 * Typings
 */
import type { GeoJSON } from "geojson";

interface IMapProps {
  places: GeoJSON[];
  selPlace: GeoJSON;
  popup?: FC<{ place: GeoJSON }>;
}

const Mappa: FC<IMapProps> = (props) => {
  const [state, setState] = useState({
    viewport: {
      latitude: 40.875419237904225,
      longitude: 14.259288500000025,
      zoom: 13,
    },
  });

  const [showPopup, setPopup] = useState(props.selPlace ? true : false);

  // Reference for the map component
  const mapRef = useRef();

  /**
   * Utility functions
   */
  const mergeState = (obj) => {
    setState((prevState) => ({ ...prevState, ...obj }));
  };

  /**
   * Interaction Handlers
   */
  const handleClick = (e: React.SyntheticEvent<HTMLElement>, obj: GeoJSON) => {
    if (e.isDefaultPrevented) return;
    setState((prevState) => ({
      ...prevState,
      viewport: {
        ...prevState.viewport,
        ...MAPBOX.transitions,
        ...getCoordinates(obj),
        zoom: 17,
      },
    }));
  };

  /**
   * Data computation
   */
  const { points, polygons, lines } = useMemo(
    () => reshapePlaces(props.places),
    [props.places]
  );

  // Map Bounds
  const bounds =
    mapRef.current !== undefined
      ? (mapRef as any).current.getMap().getBounds().toArray().flat()
      : null;

  // Cluster
  const clusterOptions = {
    zoom: state.viewport.zoom,
    bounds,
    options: { radius: 75, maxZoom: 16 },
  };

  const { clusters } = useSupercluster({
    points: [
      ...points,
      // ...poligoni
    ],
    ...clusterOptions,
  });

  return (
    <ReactMapGL
      {...state.viewport}
      {...MAPBOX.params}
      ref={mapRef}
      onViewportChange={(viewport) => {
        if (
          isInBounds(MAPBOX.maxBounds, viewport.latitude, viewport.longitude)
        ) {
          mergeState({ viewport });
        }
      }}
    >
      {clusters.map((cluster) => {
        const {
          cluster: isCluster,
          point_count: pointCount,
        } = cluster.properties;
        if (isCluster) {
          return (
            <Pin key={cluster.id} place={cluster}>
              <div
                style={{
                  color: "#fff",
                  width: `${40 + (pointCount * state.viewport.zoom) / 2}px`,
                  height: `${40 + (pointCount * state.viewport.zoom) / 2}px`,
                  background: "#04A29B",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pointCount}
              </div>
            </Pin>
          );
        }
        return (
          <Pin
            key={cluster.properties.id}
            place={cluster}
            onClick={handleClick}
          />
        );
      })}
      {polygons.length > 0 &&
        polygons.map((poly, idx) => (
          <Source key={"poly_" + idx} type="geojson" data={poly}>
            <Layer
              type="fill"
              paint={{
                "fill-color": "#799d43",
              }}
            />
          </Source>
        ))}
      {lines.length > 0 &&
        lines.map((line, idx) => (
          <Source key={"line_" + idx} type="geojson" data={line}>
            <Layer
              type="line"
              paint={{
                "line-color": "#799d43",
                "line-width": 2,
              }}
            />
          </Source>
        ))}
      {props.popup && showPopup && (
        <Popup
          {...getCoordinates(props.selPlace)}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setPopup(false)}
        >
          {props.popup({ place: props.selPlace })}
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Mappa;
