import dynamic from "next/dynamic";

export const Carousel = dynamic(() => import("./Carousel"), { ssr: false });
