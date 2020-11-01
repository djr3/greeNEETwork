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

// export const reshapePlace = (p: GeoJSON) => {
//   const { geo_json, tipologie, ...props } = p;
//   const { geometry, features } = geo_json;

//   if (geo_json.properties) {
//     delete geo_json.properties;
//   }

//   if (features) {
//     // const percorso = features.map(({ geometry }) =>
//     //   geometry.coordinates.map((c) => [c[1], c[0]])
//     // );
//     return {
//       id: p.id,
//       data: p.geo_json,
//       data_url: p.geojson_url,
//       // pickable: true,
//       // stroked: false,
//       // filled: true,
//       // extruded: true,
//       // lineWidthScale: 20,
//       // lineWidthMinPixels: 2,
//       // getFillColor: [160, 160, 180, 200],
//       // getLineColor: "#799d43",
//       // getRadius: 100,
//       // getLineWidth: 1,
//       // getElevation: 30,
//     };
//   }

//   if (geometry && geometry.type === "Point") {
//     return {
//       ...geo_json,
//       tipologie,
//       properties: { ...props, cluster: false },
//     };
//   }

//   if (geometry && geometry.type === "Polygon") {
//     return {
//       ...centroid(geo_json),
//       tipologie,
//       properties: { ...props, cluster: false },
//     };
//   }
// };

// export const reshapePlace = (place : GeoJSON) => {
//   switch (place.type) {
//     case "Polygon"
//       return {}
//     default:
//       break;
//   }

// }

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
    // const place = reshapePlace(p);
    // if (place.data) percorsi.push(place);
    // if (place.geometry && place.geometry.type === "Point") punti.push(place);
    // if (place.geometry && place.geometry.type === "Polygon")
    //   poligoni.push(place);
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
