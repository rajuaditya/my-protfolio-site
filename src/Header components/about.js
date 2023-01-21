import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Body components/Footer';
import '../Body components/Footer.css';

const About = () => {
  return (
    <React.Fragment>
         <Navbar/>
      <div className="container-flud">
        <div className="box">
           <h3>Graduation</h3>
           <p>Sri Chitturi Indraiah Memorial Degree&PG Collage Tanuku!</p> 
           <h4>B.scComputer since</h4>
           <h6>2019-2022</h6>
            <a href="#"><button>percentage 75.4%</button></a>
            <h5 id='study'>SCIM, Tanuku, Adrapradesh</h5>
            <span className="count">1</span>
        </div>
        <div className="box">
            <h3>Intermediate</h3>
            <p>Sri Chitturi Indraiah Memorial Junior Collage Tanuku!</p> 
            <h4>MPC</h4>
            <h6>2016-2018</h6>
             <a href="#"><button>percentage 55.4%</button></a>
             <h5 id='study'>SCIM, Tanuku, Adrapradesh</h5>
             <span className="count">2</span>
         </div>
         <div className="box">
            <h3>SSC,High School</h3>
            <p>ZPH School Iragavaram!</p> 
            <h6>2012-2016</h6><br/>
             <a href="#"><button>percentage 7.8 GPA</button></a>
             <h5  id='study'>ZPHS, Iragavaram, Adrapradesh</h5>
             <span className="count">3</span>
         </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default About;
