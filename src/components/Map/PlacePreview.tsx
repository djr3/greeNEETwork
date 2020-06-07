import React from "react";
import Link from "next/link";

import { Div, Anchor, Button, Icon, Text } from "atomize";
import { Contacts } from "./Contacts";
import { useStyletron } from "styletron-react";
import { Slideshow } from "../Slideshow/Slideshow";

export const PlacePreview = ({ place }) => {
  const [css] = useStyletron();
  console.log("Preview of : ", place);
  return (
    <Div
      // minH="120px"
      // maxH="260px"
      w="100%"
      p=".25rem"
    >
      {/* <Div
        bgImg="/img/slides/1.webp"
        bgSize="auto 100%"
        minH="120px"
        bgRepeat="no-repeat"
      /> */}
      {place.galleria_immagini && place.galleria_immagini.length > 0 ? (
        <Slideshow images={place.galleria_immagini} />
      ) : null}
      {/* <Div
        bgImg={place.galleria_immagini[0]}
        bgSize="cover"
        minH="150px"
        bgPos="50% 50%"
        // bgRepeat="no-repeat"
      /> */}
      <Text tag="h6" textSize="h6" m={{ t: ".5rem" }}>
        {place.nome}
      </Text>
      <Text
        textSize=".8rem"
        textWeight="300"
        m={{ y: ".5rem" }}
        className={css({ letterSpacing: ".5px", fontSize: "11.5px" })}
      >
        {place.descrizione}
      </Text>
      {/* <Contacts place={place} /> */}
      <Link href={`/esplora/${place.slug}`}>
        <Anchor>
          <Button
            h="2rem"
            p={{ x: "0.75rem" }}
            textSize="11px"
            m={{ r: "0.5rem" }}
            suffix={
              <Icon
                name="LongRight"
                size="16px"
                color="white"
                m={{ l: "1rem" }}
              />
            }
          >
            Scopri questo luogo
          </Button>
        </Anchor>
      </Link>
    </Div>
  );
};
