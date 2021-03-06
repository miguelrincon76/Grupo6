import React from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import Cotizacion from "./components/Cotizacion";
import Presupuesto from "./components/Presupuesto";
import CuadroAPU from "./components/CuadroAPU";

import MaterialList from "./components/Mat-list.component";
import EditMaterial from "./components/Mat-edit.component";
import CreateMaterial from "./components/Mat-create.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Login {...props} />}
          ></Route>
          <Route
            path="/register"
            exact
            render={(props) => <Register {...props} />}
          ></Route>
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard {...props} />}
          ></Route>
          <Route
            path="/cotizacion"
            exact
            render={(props) => <Cotizacion {...props} />}
          ></Route>
          <Route
            path="/presupuesto"
            exact
            render={(props) => <Presupuesto {...props} />}
          ></Route>
          <Route
            path="/apu"
            exact
            render={(props) => <CuadroAPU {...props} />}
          ></Route>
          <Route
            path="/material-list"
            exact
            render={(props) => <MaterialList {...props} />}
          ></Route>
          <Route
            path="/edit-material/:id"
            exact
            render={(props) => <EditMaterial {...props} />}
          ></Route>
          <Route
            path="/create-material"
            exact
            render={(props) => <CreateMaterial {...props} />}
          ></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
