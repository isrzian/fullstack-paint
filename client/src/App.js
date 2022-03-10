import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import {Toolbar, SettingBar, Canvas} from "./components"
import "./styles/app.scss";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
        <Switch>
          <Route path='/:id'>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`} />
        </Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
