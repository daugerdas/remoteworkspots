import { useState } from "react";
import "./App.css";
import Map from "./Map";
import Info from "./Info";
import data from "./data.json";

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
