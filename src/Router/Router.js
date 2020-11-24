import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import "../App.css";
import {SignUp} from '../components/SignUp/SignUp'
import {Login} from '../components/Login/Login'
import {Favorites} from '../components/favorites/Favorites'
import Fragman from '../components/ModalVideo/Fragman'


const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route exact path="/" component={App} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/fragman/:favId" component={Fragman} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/signup" component={SignUp} />
        
      </Switch>
    </div>
  );
};

export default Router;
