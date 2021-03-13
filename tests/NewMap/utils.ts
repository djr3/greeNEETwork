/**
 * Typings
 */
import centroid from "@turf/centroid";
import type { GeoJSON } from "geojson";

export const getLatLong = (place, key?: "lat" | "long") => {
  if (key && key === "lat") {
    return place.geometry.coordinates[1];
  }
  if (key && key === "long") {
    return place.geometry.coordinates[0];
  }
  return {
    latitude: place.geometry.coordinates[1],
    longitude: place.geometry.coordinates[0],
  };
};

export const getCoordinates = (place, key?: "lat" | "long") => {
  if (place.geometry && place.geometry.type === "Point") {
    return getLatLong(place);
  }
  if (place.geometry && place.geometry.type === "Polygon") {
    return getLatLong(centroid(place), key);
  } else return place;
};

interface Places {
  points: GeoJSON.Point[];
  polygons: GeoJSON.Polygon[];
  lines: GeoJSON.LineString[];
}

interface ReshapeOptions {
  convert?: boolean;
}

export const reshapePlaces = (
  places: GeoJSON[],
  options: ReshapeOptions = { convert: true }
): Places => {
  const points = [];
  const polygons = [];
  const lines = [];

  places.forEach((p) => {
    switch (p.type) {
      case "Point":
        points.push(p);
        break;
      case "Polygon":
        polygons.push(p);
        break;
      case "LineString":
        lines.push(p);
        break;
      case "Feature":
        switch (p.geometry.type) {
          case "Point":
            points.push(p);
            break;
          case "Polygon":
            options.convert ? points.push(centroid(p)) : polygons.push(p);
            break;
          case "LineString":
            lines.push(p);
            break;
          default:
            break;
        }
        break;
      default:
        break;
        throw new Error("Data not matching : " + p.type);
    }
  });

  return { points, polygons, lines };
};

export const isInBounds = (bounds, lat, long) => {
  const [b1, b2] = bounds;
  if (b1[0] <= long && long <= b2[0] && b1[1] <= lat && lat <= b2[1])
    return true;
};
