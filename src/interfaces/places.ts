import { GeoJsonObject } from "geojson";

export interface GeoPlace {
  geo_json: GeoJsonObject;
  [key: string]: any;
}

export interface Luogo extends GeoPlace {
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
}

export interface Percorso extends GeoPlace {
  id: string;
  nome: string;
  slug: string;
  geojson_url?: string;
  kml?: string;
  kml_url?: string;
}

export interface Itinerario {
  id: string;
  nome: string;
  slug: string;
  descrizione: string;
  itinerario: string | null;
  children?: Itinerario[];
}
