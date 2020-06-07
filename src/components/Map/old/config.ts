export const MAPBOX = {
  maxBounds: [
    [14.059238, 40.801726],
    [14.386253, 40.921685],
  ],
  token: process.env.REACT_APP_MAPBOX_TOKEN,
  styles: {
    gnwCustom: "mapbox://styles/danilojr3/cjsunefnk3mej1fqdepgb9bwz",
    light: "mapbox://styles/mapbox/light-v9",
    dark: "mapbox://styles/mapbox/dark-v9",
    basic: "mapbox://styles/mapbox/basic-v9",
    outdoor: "mapbox://styles/mapbox/outdoors-v10",
  },
  flyToOptions: {
    speed: 0.7,
  },
  mapStylesheet: {
    flex: "1",
    height: "100%",
    width: "100%",
  },
  featureLayout: {
    visibility: "visible",
    "icon-image": "markerPin",
  },
  featurePaint: {
    "text-color": "black",
    "circle-color": "white",
  },
  symbolLayout: {
    visibility: "visible",
    "text-field": "{ place }",
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 0.6],
    "text-anchor": "top",
  },
  lineLayout: {
    visibility: "visible",
  },
  linePaint: {
    "line-color": "#799d43",
    "line-opacity": 0.8,
    "line-width": 3,
  },
  fillLayout: {
    visibility: "visible",
  },
  fillPaint: {
    "fill-opacity": 0.8,
    "fill-color": "#C1EDCC",
  },
};
