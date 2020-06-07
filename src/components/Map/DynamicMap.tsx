/* eslint-disable react/display-name */
import dynamic from "next/dynamic";

export const DynamicMap = dynamic(
  () => import("./Mappa").then((mod) => mod.Mappa),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
