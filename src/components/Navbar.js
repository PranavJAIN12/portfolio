
// import React, { useState } from 'react'
// import './Navbar.css';
// import { Link } from 'react-scroll';
// import burgermenu from '../../src/assets/menu.png'

// export default function Navbar() {
// const contact=()=>{
//   console.log("going to contact section")
//   document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
// }
// const [showMenu, setShowMenu] = useState(false);
//   return (

//     <nav className='navbar'>
//         <h1 className='navbar-head'><span style={{color:"#DA0037"}}>P</span>ranavJain.</h1>
//             <div className='desktopMenu'>
//                 <Link className='desktopMenuListItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100}>Home</Link>
//                 <Link className='desktopMenuListItem' activeClass='active' to='skills' smooth={true} duration={500} offset={-100}>Skills</Link>
//                 <Link className='desktopMenuListItem' activeClass='active' to='portfolio' smooth={true} duration={500} offset={-20}>Portfolio</Link>
//                 <Link className='desktopMenuListItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100}>About</Link>
//             </div>
            
//                 <button className="navbarBtn" role='button' onClick={contact}>Contact Me</button>
            
//             <img src={burgermenu} className='mobMenu' alt='mobilemenu' onClick={()=>{setShowMenu(!showMenu)}}></img>
//             <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
//                 <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={()=>{setShowMenu(false)}}>Home</Link>
//                 <Link className='listItem' activeClass='active' to='skills' smooth={true} duration={500} offset={-100} onClick={()=>{setShowMenu(!showMenu)}}>Skills</Link>
//                 <Link className='listItem' activeClass='active' to='portfolio' smooth={true} duration={500} offset={-20} onClick={()=>{setShowMenu(!showMenu)}}>Portfolio</Link>
//                 <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={()=>{setShowMenu(!showMenu)}}>About</Link>
//                 <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={()=>{setShowMenu(!showMenu)}}>Contact</Link>
//             </div>
//     </nav>
//   )
// }
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import burgermenu from '../../src/assets/menu.png';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const contact = () => {
        console.log("going to contact section");
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='navbar'>
            <h1 className='navbar-head'>
                <span style={{ color: "#DA0037" }}>P</span>ranavJain.
            </h1>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100}>Home</Link>
                <Link className='desktopMenuListItem' activeClass='active' to='skills' smooth={true} duration={500} offset={-100}>Skills</Link>
                <Link className='desktopMenuListItem' activeClass='active' to='portfolio' smooth={true} duration={500} offset={-20}>Portfolio</Link>
                <Link className='desktopMenuListItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100}>About</Link>
            </div>
            <button className="navbarBtn" role='button' onClick={contact}>Contact Me</button>
            <img src={burgermenu} className='mobMenu' alt='mobilemenu' onClick={toggleMenu} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={toggleMenu}>Home</Link>
                <Link className='listItem' activeClass='active' to='skills' smooth={true} duration={500} offset={-100} onClick={toggleMenu}>Skills</Link>
                <Link className='listItem' activeClass='active' to='portfolio' smooth={true} duration={500} offset={-20} onClick={toggleMenu}>Portfolio</Link>
                <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={toggleMenu}>About</Link>
                <Link className='listItem' activeClass='active' to='intro' smooth={true} duration={500} offset={-100} onClick={toggleMenu}>Contact</Link>
            </div>
        </nav>
    );
}
