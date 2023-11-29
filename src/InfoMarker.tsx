import { Marker } from "@react-google-maps/api";

function InfoMarker(props: any) {
  return (
    <Marker
      position={props.position}
      onClick={() => props.setActiveMarker(props.id)}
      icon={{ url: require(`./${props.category}.svg`), scale: 6 }}
    />
  );
}

export default InfoMarker;
