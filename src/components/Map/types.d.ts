export interface MappaState {
  center: { lng: number; lat: number };
  fitBounds?: any;
  places?: Observable<object[]>;
  // selPlace?: string;
  viewport: {
    latitude: number;
    longitude: number;
  };
  zoom: number | number[];
}

export interface MappaProps {
  places: any[];
  onStyleLoad?: any;
  selPlace?: any;
  onMarkerClick?: function;
  withPopup?: boolean;
}
