import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Contacts from "../Components/Contacts";

function MainRoutes() {
  return (
    <Router>
      <Switch>  
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/:contacts" element={<Contacts/>}></Route>
      </Switch>
    </Router>
  );
}

export default MainRoutes;