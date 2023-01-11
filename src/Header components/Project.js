import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Body components/Footer';

const Project = () => {
  return (
    <React.Fragment>
     <Navbar/>
     <h1>Projects</h1>
     <hr style={{"borderBottom":"5px solid green","width":"5%"}}/>
     
     <Footer/>
    </React.Fragment>
  )
}

export default Project;