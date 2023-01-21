import React from "react";
import Home from "./Header components/home";
import About from "./Header components/about";
import Contect from "./Header components/contect";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Project from "./Header components/Project";

function App() {
  return (
    <div className="App">
      <center>

  <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/project" element={<Project/>} />
     <Route path="/contect" element={<Contect/>} />
     <Route path="/nitfly-protfolio"  element={<Home/>}/>
     </Routes>
    

     </center>
    </div>
  );
}

export default App;
