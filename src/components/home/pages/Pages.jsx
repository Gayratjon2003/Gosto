import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Home from "../Home";
import "../../../style/main.scss";
import Details from "../details/Details";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
