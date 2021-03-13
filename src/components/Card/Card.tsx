import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Link as Anchor, Card as GCard, Text } from "@geist-ui/react";
import { wordSplit } from "core/utils";

const DynamicImage = dynamic(
  () => import("@geist-ui/react").then((mod) => mod.Image),
  { ssr: false }
);
const DynamicVideo = dynamic(() => import("react-player"), { ssr: false });

export default function Card({ data, type, mini = false }) {
  const isPlace = type === "place";
  return (
    <GCard id={"card_" + data.id}>
      <header>
        {isPlace ? (
          <DynamicImage
            //@ts-ignore
            style={{ objectFit: "cover" }}
            height={200}
            src={`https://api.agritettura.org/greeneetwork/assets/${data.galleria_immagini[0]}?key=directus-large-contain`}
          />
        ) : (
          <DynamicVideo
            height={280}
            width="100%"
            url={data.video_pillola}
            // style={{ objectFit: "cover" }}
          />
        )}
      </header>

      <GCard.Content>
        <Text h4>{isPlace ? data.nome : data.titolo}</Text>
        {!mini && (
          <Text small type="secondary">
            {wordSplit(data.descrizione)}
          </Text>
        )}
      </GCard.Content>

      <GCard.Footer>
        <Link
          prefetch={false}
          href={isPlace ? "/esplora/[slug]" : "/storie/[slug]"}
          as={isPlace ? `/esplora/${data.slug}` : `/storie/${data.slug}`}
        >
          <Anchor block type="secondary">
            {isPlace ? "Scopri luogo" : "Leggi la storia"}
          </Anchor>
        </Link>
      </GCard.Footer>
    </GCard>
  );
}
