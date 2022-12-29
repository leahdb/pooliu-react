import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { registerLicense } from "@syncfusion/ej2-base";
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

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkXFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xadkNgW3pWeH1XQg==;Mgo+DSMBPh8sVXJ0S0J+XE9AdlRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdqWXldcnFdT2BVVQ==;ORg4AjUWIQA/Gnt2VVhkQlFacl9JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhUH9Yc3ZQTmleVEA=;ODM3NTE1QDMyMzAyZTM0MmUzMFJJMEZjVTZyM284SU10ZHJSOVNDaThVZExCRlJ5c1p5cHJ6TUFEYXg4RkE9;ODM3NTE2QDMyMzAyZTM0MmUzMElXc0VhajExWkoxSEtxTWxYalJkeDRIOHpHWVFDd21SRkhTenZEdjdjNms9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtCVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW3ZedndXQ2lcUkdy;ODM3NTE4QDMyMzAyZTM0MmUzMFRZZkhzS25Fck1BYzVGZ0YyeGw4b1hUb2FqdDk2cDFZbE0zdnZFR3FYL2M9;ODM3NTE5QDMyMzAyZTM0MmUzMExXcUx6WU9MNFRkVWNpTnBjL2R2anFGazlJbnNoNVhJZXIxWElrK21BeTQ9;Mgo+DSMBMAY9C3t2VVhkQlFacl9JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhUH9Yc3ZQT2FUVUA=;ODM3NTIxQDMyMzAyZTM0MmUzMGp4aUFEeXVocG1Wdk1iejM0YzBzVjFNdmd5MmxjRlROYkVIQWtaY0VkbDg9;ODM3NTIyQDMyMzAyZTM0MmUzMG1uMnJpRjMvSFdhcjdsUlBpMWZQNHI5ODhINzNvZUg3ZlM5c2lvMVh6TFU9;ODM3NTIzQDMyMzAyZTM0MmUzMFRZZkhzS25Fck1BYzVGZ0YyeGw4b1hUb2FqdDk2cDFZbE0zdnZFR3FYL2M9"
);

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
