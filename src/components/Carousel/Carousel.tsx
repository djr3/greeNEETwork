import Head from "next/head";
import OwlCarousel, { OwlCarouselProps } from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import styles from "./Carousel.module.sass";

export default function Carousel(props: OwlCarouselProps) {
  const { children, ...rest } = props;
  return (
    <OwlCarousel
      className={styles.theme}
      navContainerClass={styles.nav}
      navClass={[styles.prev, styles.next]}
      stageClass={styles.stage}
      {...rest}
    >
      <Head>
        <script
          key="jquery"
          src="https://code.jquery.com/jquery-3.5.1.min.js"
        />
      </Head>
      {children}
    </OwlCarousel>
  );
}
