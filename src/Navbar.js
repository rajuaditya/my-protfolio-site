import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';





const Navbar = () => {
  const [click,setClick]=useState(false);

  return (
    <section> 
      <div className="main-navbar">
      <div className='logo'>
      <i className="fa-solid fa-graduation-cap"></i>
    </div>
       
            <ul className={click ? "list-item active":"list-item"}>
               <NavLink style={{"textDecoration":"none"}} to='/'> <li>Home</li></NavLink>
               <NavLink style={{"textDecoration":"none"}}  to='/about'> <li>About</li></NavLink>
               <NavLink style={{"textDecoration":"none"}}  to='/project'> <li>Project</li></NavLink>
               <NavLink style={{"textDecoration":"none"}}  to='/contect'> <li>Contect</li></NavLink>
            </ul>
            <div className='hambarger' onClick={()=>setClick(!click)}>
              {
                click ? (<i class="fa-sharp fa-solid fa-xmark" style={{"color":"red"}}></i>):(<i class="fa-solid fa-bars" style={{"color":"white"}}></i> )}
              </div>
        </div>
    </section>
  )
}

export default Navbar;