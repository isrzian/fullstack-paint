import React from "react";
import {Toolbar, SettingBar, Canvas} from "./components"
import "./styles/app.scss";

const App = () => {
  return (
    <div className="App">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
