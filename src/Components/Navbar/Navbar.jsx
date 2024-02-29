import React, { useState } from 'react'
import './Navbar.css'

import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false);
  return (
    <nav className='navbar'>
        <h1 className='logo'>F.T</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
     <button className='button-78 btn0' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
     }} >Contact Me</button>

<i class='bx bx-menu mobMenu'onClick={()=>setShowMenu(!showMenu)}></i>
<div className="navMenu" style={{display: showMenu? "flex":"none"}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)} >About</Link>
            
            <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar