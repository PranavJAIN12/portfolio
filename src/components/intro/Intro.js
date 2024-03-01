/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Intro.css'
import photo from '../../assets/1.png'
// import { Link } from 'react-scroll' 
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

export default function Intro() {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span><br/>
            <span className='name'>I'm <span className='name-name'style={{color:'#DA0037'}}>Pranav</span><br/>A Web Developer</span>
            <p className='intro-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eum dolor itaque ad at, voluptate deleniti, alias necessitatibus magni veritatis recusandae veniam perspiciatis!</p>
        <button className='hire-btn'>Hire me</button>
        <div className='links'>
           <a href='www.github.com/PranavJain12'> <img className='link-item' style={{backgroundColor:'white ', borderRadius:'100%'}} src={github}></img></a>
            <img className='link-item' src={linkedin}></img>
        </div>
        </div>
        <img className='bg' src={photo} />
    </section>
  )
}
