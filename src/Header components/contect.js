import React from 'react';
import Navbar from "../Navbar";
import Footer from '../Body components/Footer';



const Contect = () => {
  
  return (
    <React.Fragment>
     <Navbar/>
     <h1>Contect me</h1>
     <hr style={{"borderBottom":"5px solid yellow","width":"5%"}}/>
     <div className='right'>
     <h3 id='phone'><i className="fa-solid fa-mobile-retro"></i>+91 9515105677<br/></h3>
     <h5 id='email'><i className="fa-sharp fa-solid fa-envelopes-bulk"></i>   rajuaditya4466@gmail.com <br/></h5>
     <h3 id='home'><i className="fa-sharp fa-solid fa-house"></i><span style={{"textTransform":"captlize"}}> Hydrabad ,Telangana,India</span></h3>
     </div>
     
     
    
     
     <Footer/>
    </React.Fragment>
  )
}

export default Contect;