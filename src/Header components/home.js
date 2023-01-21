import React from 'react'
import {Button} from 'react-bootstrap';
import ReactLogo from './image folder/img5.jpg';
import RajuPicture from './image folder/my picture.jpg.png';
import Malti from './image folder/malti.jpg';
import './header.css';
import Navbar from "../Navbar";
import Footer from '../Body components/Footer';
import '../Body components/Footer.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    /*----------Hearder section-------------*/
    <React.Fragment>
      <Navbar/>
      <section className='header-section'>
    <div className='front-content'>
    <h1 className='main-heading'>I'm Peddi Raju</h1>
    <h4 className='devalop'>FrontEnd Devaloper</h4>
    <div className='socil-madia-icon'>
    <a href='https://github.com/rajuaditya'><i className="fa-brands fa-github"></i></a>
   <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook" style={{"color":"blue"}}></i></a>
   <a href= "https://www.youtube.com/"><i className="fa-brands fa-youtube" style={{"color":"red"}}></i></a> 
  <a href="https://www.instagram.com/raju_local_boy/" ><i className="fa-brands fa-instagram" style={{"color":"red"}}></i></a>

    </div>
  <Link to="/about"><Button variant='success more-btn' style={{"fontFamily":"sans-serif"}} >more about Raju</Button></Link>
    </div>
    <div className='all-image'>
      <img className='image-logo' src={ ReactLogo } alt='Raju pic'/>
      <img className='image-logo-one' src={ RajuPicture } alt='Raju pic'/>
      <img className='image-logo-two' src={ Malti } alt='Raju pic'/>
      
    </div>
    
    
    </section>
    <Footer/>
  </React.Fragment>
  )
};

export default Home;