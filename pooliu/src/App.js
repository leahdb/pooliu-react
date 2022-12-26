import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
//importing screens
import Home from "./Screens/Home";
import Login from "./Screens/Login.js";
//importing components
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import HomeNavigation from "./Components/HomeNavigation";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />}>
          <Route path="/test" element={<Login navigate={navigate} />} />
          <Route path="*" element={<Login navigate={navigate} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
