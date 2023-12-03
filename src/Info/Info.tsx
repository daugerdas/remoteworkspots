import { useEffect, useState } from "react";
import "./Info.css";
import logo from "../assets/remoteworkspots.svg";
import coffeeshopcategory from "../assets/coffeeshopcategory.svg";
import librarycategory from "../assets/librarycategory.svg";

type Marker = {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  address: string;
  category: string;
  desc: string;
  hours: any;
};

function Info(props: { activeMarker: number | null; data: Marker[] }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setExpanded(false), [props.activeMarker]);

  const today = new Date().getDay();

  if (props.activeMarker === -1)
    return (
      <div className="info-container" style={{ padding: "1em", width: "30em" }}>
        <div className="header">
          <img src={logo} style={{ height: "4em" }} alt="logo" />
          <div className="header-text">
            Find your next coffee shop, library, co-working or other place to
            work remotely.
          </div>
        </div>
        <div className="info-description">
          Click on the map markers to explore!
        </div>
      </div>
    );

  return (
    <div className="info-container" style={{ padding: "1em", width: "30em" }}>
      <div className="header">
        <img src={logo} style={{ height: "4em" }} alt="logo" />
        <div className="header-text">
          Find your next coffee shop, library, co-working or other place to work
          remotely.
        </div>
      </div>
      <div className="info">
        <div className="title">
          <div className="name">
            {props.activeMarker
              ? props.data.find(
                  (item: Marker) => item.id === props.activeMarker
                )?.name
              : null}
          </div>
          <div className="category">
            <img
              src={
                props.data.find(
                  (item: Marker) => item.id === props.activeMarker
                )?.category === "coffeeshop"
                  ? coffeeshopcategory
                  : librarycategory
              }
              alt=""
            />
            {props.activeMarker
              ? props.data.find(
                  (item: Marker) => item.id === props.activeMarker
                )?.category
              : null}
          </div>
        </div>
        <div className="address">
          <div style={{ fontWeight: "bold" }}>Address</div>
          <div>
            {props.activeMarker
              ? props.data.find(
                  (item: Marker) => item.id === props.activeMarker
                )?.address
              : null}
          </div>
        </div>
        <div className="hours">
          <div>
            {(today === 1 || expanded) && <div>Monday</div>}
            {(today === 2 || expanded) && <div>Tuesday</div>}
            {(today === 3 || expanded) && <div>Wednesday</div>}
            {(today === 4 || expanded) && <div>Thursday</div>}
            {(today === 5 || expanded) && <div>Friday</div>}
            {(today === 6 || expanded) && <div>Saturday</div>}
            {(today === 0 || expanded) && <div>Sunday</div>}
          </div>
          <div>
            {(today === 1 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.monday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.monday.closed
                  : null}
              </div>
            )}
            {(today === 2 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.tuesday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.tuesday.closed
                  : null}
              </div>
            )}
            {(today === 3 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.wednesday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.wednesday.closed
                  : null}
              </div>
            )}
            {(today === 4 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.thursday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.thursday.closed
                  : null}
              </div>
            )}
            {(today === 5 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.friday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.friday.closed
                  : null}
              </div>
            )}
            {(today === 6 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.saturday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.saturday.closed
                  : null}
              </div>
            )}
            {(today === 0 || expanded) && (
              <div>
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.sunday.open
                  : null}{" "}
                -{" "}
                {props.activeMarker
                  ? props.data.find(
                      (item: Marker) => item.id === props.activeMarker
                    )?.hours.sunday.closed
                  : null}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="expand-button"
        >
          {expanded ? "Collapse working hours" : "Expand working hours"}
        </button>
      </div>
    </div>
  );
}

export default Info;
