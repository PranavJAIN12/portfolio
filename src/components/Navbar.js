/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='navbar-head'><span style={{color:"#DA0037"}}>P</span>ranavJain.</h1>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Clients</Link>
            </div>
            
                <button className="navbarBtn" role='button'>Contact Me</button>
            
    </nav>
  )
}
