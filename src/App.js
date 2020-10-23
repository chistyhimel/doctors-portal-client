import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import Appointment from "./components/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PatientList from "./components/Dashboard/PatientList";
import AddDoctor from "./components/Dashboard/AddDoctor";
import AllAppointments from "./components/Dashboard/AllAppointments";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/appointments">
            <Appointment></Appointment>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/allAppointments">
            <AllAppointments></AllAppointments>
          </PrivateRoute>

          <PrivateRoute path="/patients">
            <PatientList></PatientList>
          </PrivateRoute>

          <PrivateRoute path="/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
