import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import nosotros from "./image/01.png";

import "./styles.scss";

import BotonMenu from "./menu.component";
import HomePage from "./home.component";
import ZoomPage from "./zoom.component";
import ProgramaPage from "./programa.component";

export default function App() {
  return (
    <div className="Container pagina">
      <div className="float-end">
        <BotonMenu />
      </div>
      <div className="row">
        <div className="col-sm">
          <div
            className="portada img-fluid"
            style={{
              background: `url(${nosotros})`
            }}
          />
        </div>

        <div className="header col-sm d-flex ">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <HomePage nombres="Edgar y Jenny" />}
            />
            <Route
              exact
              path="/programa"
              render={(props) => <ProgramaPage />}
            />

            <Route exact path="/zoom" render={(props) => <ZoomPage />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
