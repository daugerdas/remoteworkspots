import React, { Dispatch, SetStateAction } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import data from "./data.json";

type MarkerType = {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  address: string;
  category: string;
  desc: string;
};

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 54.6872123,
  lng: 25.2702799,
};

const options = {
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
  streetViewControl: false,
  mapTypeControl: false,
};

function Map(props: {
  activeMarker: number | null;
  setActiveMarker: Dispatch<SetStateAction<number>>;
  data: MarkerType[];
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      ? process.env.REACT_APP_GOOGLE_API_KEY
      : "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options}
    >
      {data.map((item) => (
        <Marker
          position={item.position}
          onClick={() => props.setActiveMarker(item.id)}
          icon={{ url: require(`./${item.category}.svg`), scale: 6 }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
