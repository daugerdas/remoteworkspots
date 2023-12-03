import { useState } from "react";
import "./App.css";
import Map from "./Map/Map";
import Info from "./Info/Info";
import data from "./data/data.json";

function App() {
  const [activeMarker, setActiveMarker] = useState(-1);

  return (
    <div className="App">
      <Info activeMarker={activeMarker} data={data} />
      <Map
        activeMarker={activeMarker}
        setActiveMarker={setActiveMarker}
        data={data}
      />
    </div>
  );
}

export default App;
