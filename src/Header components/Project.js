import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Body components/Footer';
import Comeres from './image folder/back3.jpg';
import Coffe from './image folder/contact.jpg';
import Visnu from './image folder/logo.png';
import Login from './image folder/img5.jpg';

const Project = () => {
  return (
    <React.Fragment>
     <Navbar/>
     <h1>Projects</h1>
     <hr style={{"borderBottom":"5px solid green","width":"5%"}}/>
     <div className='boxs-div'>
      <boxs className="one-box">
        <h2>
          e-commaerce project
          <hr style={{"borderBottom":"5px solid red","width":"15%"}}/>
          <img id='comers-img' src={ Comeres}/>
         <a href=' https://rajuaditya.github.io/ecomars-project/'><i className="fa-solid fa-share"></i></a>
        
        </h2>
          <p>HTML,CSS,JAVASCRIPT</p>
      </boxs>
      <boxs className="one-box">
        <h2>
          Coffe shop
          <hr style={{"borderBottom":"5px solid red","width":"15%"}}/>
          <img id='comers-img' src={Coffe}/>
          <a href='file:///C:/Users/rajua/OneDrive/Desktop/coffe%20shop/index.html'><i className="fa-solid fa-share"></i></a>
          
        </h2>
        <p>HTML,CSS,JAVASCRIPT</p>
      </boxs>
      <boxs className="one-box">
        <h2>
          Vishnu collage<br/>
          <hr style={{"borderBottom":"5px solid red","width":"15%"}}/>
          <img id='comers-img2' src={Visnu}/><br/>
         <a href=' https://rajuaditya.github.io/vishnu-collage/'><i className="fa-solid fa-share"></i></a>
        </h2>
        <p>HTML,CSS,JAVASCRIPT</p>
      </boxs>
      <boxs className="one-box">
        <h2>
          login page 
          <hr style={{"borderBottom":"5px solid red","width":"15%"}}/>
          <img  src={Login} width="160px"/><br/>
          <a href='https://rajuaditya.github.io/Favret-project/'><i className="fa-solid fa-share"></i></a>
        </h2>
        <p>HTML,CSS,JAVASCRIPT</p>
      </boxs>
      
     </div>
     
     <Footer/>
    </React.Fragment>
  )
}

export default Project;