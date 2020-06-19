import React from "react";
import Player from "react-player";

import { useStyletron } from "styletron-react";
import { motion } from "framer-motion";
import { Image } from "components/Image/Image";

export const Hero = () => {
  const [css] = useStyletron();

  return (
    <motion.div
      initial="closed"
      animate="open"
      className={css({
        width: "100%",
        minHeight: "68vh",
        display: "grid",
        gridGap: "12px",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateAreas: "auto repeat(6, 1fr)",
      })}
    >
      <motion.div
        className={css({
          gridArea: "1 / 1 / span 3 / span 3",
          background: "#C8DCC5",
          padding: "2rem",
          zIndex: 1,
          position: "relative",
        })}
        variants={{
          open: {
            width: "100%",
            height: "100%",
            transition: {
              duration: 1,
              staggerChildren: 0.3,
              when: "beforeChildren",
            },
          },
          closed: {
            width: "0%",
            height: "0%",
            transition: { duration: 1, when: "afterChildren" },
          },
        }}
      >
        <motion.h1
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: -50 },
          }}
          className={css({
            textTransform: "uppercase",
          })}
        >
          Il Parco Metropolitano delle Colline di Napoli
        </motion.h1>

        {/* <Text
        tag="h1"
        textSize={{ xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }}
        // className={css({
        //   backgroundClip: "text",
        //   filter: "invert(1) grayscale(1) contrast(9)",
        // })}
      >
        IL PARCO METROPOLITANO DELLE COLLINE DI NAPOLI
      </Text> */}
      </motion.div>
      <motion.div
        className={css({
          height: "100%",
          gridArea: "2 / 3 / span 4 / span 4",
          position: "relative",
        })}
        variants={{
          open: {
            width: "100%",
            // height: "100%",
            opacity: 1,
            transition: { duration: 1 },
          },
          closed: {
            width: "0%",
            // height: "0%",
            opacity: 0,
            transition: { duration: 1 },
          },
        }}
      >
        <Image
          alt="Parco delle Colline, vista dal satellite"
          src="/img/parco_satellite.webp"
        />
      </motion.div>
    </motion.div>
  );
};
