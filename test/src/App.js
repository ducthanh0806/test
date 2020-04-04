import React from "react";
import Player from "./Player";
import Next from "./Next";
import Prev from "./Prev";

export default function App() {
  return (
    <div className="App">
      <Prev/><Player/><Next/>
    </div>
  );
}
