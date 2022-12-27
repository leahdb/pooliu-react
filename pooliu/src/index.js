import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home"
import Navigation from "./Components/Navigation";
import Login from './Screens/Login';
import Register from "./Screens/Register";
import Verify from "./Screens/Verify";
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


