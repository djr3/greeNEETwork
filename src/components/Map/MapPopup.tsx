import Link from "next/link";

import { Popup } from "react-map-gl";
import { Div, Text, Button, Icon, Anchor } from "atomize";

import { Contacts } from "./Contacts";
import { getCoordinates } from "./utils";

export const MapPopup: React.FC<{ place: any; onClose: any }> = ({
  place,
  onClose,
}) => {
  const center = getCoordinates(place.geo_json);

  console.log("Popup Place : ", place);
  console.log("Popup Place Coord : ", center);

  return (
    <Popup
      latitude={center.latitude}
      longitude={center.longitude}
      closeButton={true}
      closeOnClick={false}
      onClose={() => onClose(false)}
    >
      <Div minH="120px" maxH="260px" w={{ xs: "300px" }} p=".5rem">
        <Text tag="h6" textSize="h6">
          {place.nome}
        </Text>
        <p>{place.descrizione}</p>
        <Contacts place={place} />
        <Link href={`/esplora/${place.slug}`}>
          <Anchor>
            <Button
              h="2rem"
              p={{ x: "0.75rem" }}
              textSize="caption"
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
    </Popup>
  );
};
