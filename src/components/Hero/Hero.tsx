import React, { useState } from "react";
import Player from "react-player/lazy";
import { Button, Text } from "@geist-ui/react";
import PlayCircle from "@geist-ui/react-icons/playCircle";

import styles from "./Hero.module.sass";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideo = () => setShowVideo((prev) => !prev);
  const closeVideo = () => setShowVideo(false);

  return (
    <>
      <div className={styles.main}>
        <Text h1 className={styles.title}>
          Il Parco Metropolitano delle Colline di Napoli
        </Text>
        <Text className={styles.description}>
          Un'area poco conosciuta dai cittadini, dimora di antiche tradizioni,
          scorci mozzafiato, misteri e saperi che vengono tramandati da
          generazioni di cittadini che vivono e lavorano sul territorio e che ne
          compongono tessuto produttivo ed vera eccellenza.
        </Text>
        <div className={styles.c2a}>
          <div className={styles.scrolldown}>
            <div className={styles.scrolldown_graphic}></div>
          </div>
          <Button
            auto
            type="secondary"
            ghost
            onClick={handleVideo}
            iconRight={<PlayCircle size={24} />}
            size="large"
          >
            Guarda il Video
          </Button>
        </div>
      </div>
      <div className={styles.wrapper}>
        {/* <Image src="/video/UrbanoRurale_thumb.jpg" width={880} height={497} /> */}
        <Player
          className={styles.player}
          url={[
            { src: "/video/UrbanoRurale_720p.webm", type: "video/webm" },
            { src: "/video/UrbanoRurale_720p.mp4", type: "video/mp4" },
          ]}
          width="100%"
          height="100%"
          light={true}
          controls={true}
          playing={showVideo}
          config={{
            file: {
              attributes: {
                poster: "/video/UrbanoRurale_thumb.jpg",
                autoPlay: "none",
              },
            },
          }}
        />
      </div>

      {/* 
        <Modal
          open={showVideo}
          onClose={closeVideo}
          width="85vw"
          // style={{ maxHeight: "68vh" }}
        > 
      */}
    </>
  );
};
