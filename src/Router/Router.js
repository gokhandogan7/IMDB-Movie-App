import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import "../App.css";
import {SignUp} from '../components/SignUp/SignUp'
import {Login} from '../components/Login/Login'
import {favorites} from '../components/favorites/favorites'


const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route exact path="/" component={App} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/favorites" component={favorites} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Router;
