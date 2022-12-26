import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//importing screens
import Home from "./Screens/Home";
import Login from "./Screens/Login";
//importing components
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import HomeNavigation from './Components/HomeNavigation';



function App() {
  return (
    <div className="App">
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
