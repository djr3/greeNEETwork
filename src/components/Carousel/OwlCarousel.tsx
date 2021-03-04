import Head from "next/head";
import OwlCarousel, { OwlCarouselProps } from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "./Owl.module.sass";

function Carousel(props: OwlCarouselProps) {
  const { children, ...rest } = props;
  return (
    <>
      <Head>
        <script
          key="jquery"
          src="https://code.jquery.com/jquery-3.5.1.min.js"
        />
      </Head>
      <OwlCarousel
        className={styles.theme}
        navContainerClass={styles.nav}
        // navClass={[styles.prev,styles.next]}
        stageClass={styles.stage}
        {...rest}
      >
        {children}
      </OwlCarousel>
    </>
  );
}
export default Carousel;
