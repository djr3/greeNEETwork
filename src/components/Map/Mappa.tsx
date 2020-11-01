// Core Components
import React, { useRef, useState, useEffect, useMemo } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import useSupercluster from "use-supercluster";

// MapBox Components & Tools
import { MAPBOX, style } from "./config";
import { getCoordinates, isInBounds, reshapePlaces } from "./utils";

// Map Addons
import { Pin } from "./Pin";
import { MapPopup } from "./MapPopup";

// Typings
import { MappaProps } from "./types";

export const Mappa: React.FC<MappaProps> = (props) => {
  const [state, setState] = useState({
    showPopup: props.selPlace ? true : false,
    viewport: {
      latitude: props.selPlace
        ? getCoordinates(props.selPlace.geo_json).latitude
        : 40.867263, // 40.875419237904225,
      longitude: props.selPlace
        ? getCoordinates(props.selPlace.geo_json).longitude
        : 14.225853, //14.259288500000025,
      zoom: 12,
    },
  });
  const mapRef = useRef();

  // State updater utility function
  const mergeState = (obj) => {
    setState((prevState) => ({ ...prevState, ...obj }));
  };

  /**
   * User Interaction Handlers
   */
  const flyTo = (obj) => {
    setState((prevState) => ({
      ...prevState,
      viewport: {
        ...prevState.viewport,
        ...MAPBOX.transitions,
        ...getCoordinates(obj),
        zoom: 17,
      },
      showPopup: true,
    }));
  };

  const handleClick = (e, obj) => {
    if (props.onClick) props.onClick(e, obj);
    if (props.onMarkerClick) props.onMarkerClick(e, obj.id);
  };

  const handlePopup = () => {
    mergeState({ showPopup: false });
  };

  // Render Data
  const { punti, poligoni, percorsi } = useMemo(
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
    points: [...punti, ...poligoni],
    ...clusterOptions,
  });

  useEffect(() => {
    if (props.selPlace) {
      const { geo_json } = props.selPlace;
      geo_json ? flyTo(geo_json) : flyTo(props.selPlace);
    }
  }, [props.selPlace]);

  return (
    <ReactMapGL
      {...state.viewport}
      {...MAPBOX.params}
      mapStyle={style}
      onViewportChange={(viewport) => {
        if (
          isInBounds(MAPBOX.maxBounds, viewport.latitude, viewport.longitude)
        ) {
          // mergeState({ viewport, showPopup: false });
          mergeState({ viewport });
        }
      }}
      ref={mapRef}
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

      {percorsi.length > 0 &&
        percorsi.map((p) => (
          <Source key={p.id} id={p.id} type="geojson" data={p.data}>
            <Layer
              type="line"
              source={p.id}
              paint={{
                "line-color": "#799d43",
                "line-width": 2,
              }}
            />
          </Source>
        ))}
      {props.withPopup && state.showPopup ? (
        <MapPopup place={props.selPlace} onClose={handlePopup} />
      ) : null}
    </ReactMapGL>
  );
};
