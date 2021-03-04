import dynamic from "next/dynamic";

export const Carousel = dynamic(() => import("./OwlCarousel"), { ssr: false });
