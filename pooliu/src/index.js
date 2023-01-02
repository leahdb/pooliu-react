import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Navigation from "./Components/Navigation";
import Login from './Screens/Login';
import PickRide from './Screens/PickRide';
import RideAccordion from "./Components/Accordion";
import Register from "./Screens/Register";
import Verify from "./Screens/Verify";
import AllRides from "./Screens/AllRides";
import CreateTrip from "./Screens/CreateTrip";
import SetupAccount from "./Screens/SetupAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nav",
    element: <Navigation />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/pick-ride",
    element: <PickRide />,
  },
  {
    path: "/ride",
    element: <RideAccordion></RideAccordion>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/all-rides",
    element: <AllRides />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/setup-account",
    element: <SetupAccount />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
