import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
    return (
        <Switch>
            <Route path={"/"} component={Home} exact/>
            <Route path={"/login"} component={Login} />
        </Switch>
    );
}

export default App;
