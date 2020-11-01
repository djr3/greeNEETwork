import { GeoJsonObject } from "geojson";

export interface GeoPlace {
  geo_json: GeoJsonObject;
}

export interface IItinerario {
  id: string;
  nome: string;
  slug: string;
  descrizione: string;
  itinerario: string | null;
  children?: IItinerario[];
  [x: string]: any;
}

export interface ILuogo extends GeoPlace {
  id: string;
  nome: string;
  slug: string;
  descrizione?: string;
  contenuto?: string;
  accessibilita?: string;
  email?: string;
  geojson_url?: string;
  kml: string;
  kml_url: string;
  pagina_facebook?: string;
  pagina_instagram?: string;
  pagina_web?: string;
  telefono?: string;
  itinerari?: IItinerario[];
  galleria_immagini?: any[];
  servizi?: any[];
  tipologie?: any[];
}

export interface IPercorso extends GeoPlace {
  id: string;
  nome: string;
  slug: string;
  geojson_url?: string;
  kml?: string;
  kml_url?: string;
  itinerari?: IItinerario[];
}
