import { ILuogo } from "./places";

export interface IPost {
  id: string;
  slug: string;
  titolo: string;
  descrizione: string;
  contenuto: string;
  luoghi?: Array<{ luogo: ILuogo }>;
}
