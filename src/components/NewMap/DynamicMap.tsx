/* eslint-disable react/display-name */
import dynamic from "next/dynamic";

export const DynamicMap = dynamic(() => import("./Mappa"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
