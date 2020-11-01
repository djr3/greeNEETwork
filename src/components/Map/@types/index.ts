import { ILuogo } from "@types";

export interface MappaState {
  center: { lng: number; lat: number };
  fitBounds?: any;
  places?: ILuogo[];
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
  onMarkerClick?: Function;
  onClick?: Function;
  withPopup?: boolean;
}
