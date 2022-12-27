import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Navigation from "./Components/Navigation";
<<<<<<< HEAD
import Login from './Screens/Login';
import PickRide from './Screens/PickRide';
=======
import RideAccordion from "./Components/Accordion";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Verify from "./Screens/Verify";
import AllRides from "./Screens/AllRides";
>>>>>>> faccd697ba70dd0f7e2261fe82622d742622c622
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
<<<<<<< HEAD
    element: <Home/>
  },
  {
    path:"/pickride",
    element:<PickRide/>
  }
=======
    element: <Home />,
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
>>>>>>> faccd697ba70dd0f7e2261fe82622d742622c622
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
