import Link from 'next/link'
import React from 'react'

function Navbar() {

    const[clicked,setClicked]=React.useState(false)

    const handleClick=()=>{
        setClicked(!clicked)
    }
    return (
        <nav className="Navbar-items">
           <h1 className="NavbarLogo"><img src="logo-ios.png"></img></h1>
           <div className="menu-icon" onClick={handleClick}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
           </div>

           <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-links"><Link href="/"><a>Home</a></Link></li>
               <li className="nav-links"><Link href="/about"><a>About</a></Link></li>
               <li className="nav-links"><Link href="/contact"><a>Contact Us</a></Link></li>
               <ul className={clicked ? 'social social-active' : 'social'}>
                   <li><i className="fab fa-2x fa-facebook-square"></i></li>
                   <li><i className="fab fa-2x fa-instagram-square"></i></li>
                   <li><i className="fab fa-2x fa-linkedin"></i></li>
               </ul>
           </ul>
        </nav>
    )
}

export default Navbar
