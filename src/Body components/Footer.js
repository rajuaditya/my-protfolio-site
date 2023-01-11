import React from 'react'
const Footer = () => {
  return (
    <React.Fragment>
    <section>
        <div className="footor">
            <div className="footor-menu">
                <ul>
                    <li>Home</li>
                    <li>shop</li>
                    <li>about</li>
                    <li>project</li>
                    <li>contect</li>
                </ul>
            </div>
            <div className="socil-media">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook rajj" style={{"color":"rgb(75, 52, 250) "}}></i></a>
           <a href="https://twitter.com/?lang=en-in" ><i className="fa-brands fa-twitter rajj"></i></a>
           <a href="https://www.instagram.com/raju_local_boy/" ><i className="fa-brands fa-instagram rajj" style={{"color":"rgb(229, 10, 152)"}}></i></a>
            <a href= "https://www.youtube.com/"><i className="fa-brands fa-youtube rajj" style={{"color":"rgb(254, 0, 0)"}}></i></a>
            </div>
            <div className="info">
                <h6>©2020 - 2022 Learn With PeddiRaju bikkavolu , Inc. All rights reserved</h6>
        
            </div>
        </div>
    
    </section>
    </React.Fragment>
  )
}

export default Footer;