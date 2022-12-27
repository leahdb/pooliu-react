import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home"
import Navigation from "./Components/Navigation";
import RideAccordion from "./Components/RideAccordion";
import Login from './Screens/Login';
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
    path: "/ride",
    element: <RideAccordion></RideAccordion>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


