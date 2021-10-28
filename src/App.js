import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Auth/Profile";
import All from "./components/User/All";
import ConfirmEmail from "./components/User/ConfirmEmail";
import Verified from "./components/User/Verified";


function App() {
    return (
        <Switch>
            <Route exact path={["/home","/"]} component={Home}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/signup"} component={Register}/>
            <Route exact path={"/profile"} component={Profile}/>
            <Route exact path={"/user"} component={All}/>
            <Route exact path={"/confirmEmail"} component={ConfirmEmail}/>
            <Route exact path={"/verified"} component={Verified}/>
        </Switch>
    );
}

export default App;
