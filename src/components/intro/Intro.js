/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Intro.css';
import photo from '../../assets/1.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import { motion } from 'framer-motion';

export default function Intro() {
  const contact = () => {
    console.log("going to contact section");
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='intro'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.25 }}>
        <div className="introContent">
          <span className='hello'>Hello,</span><br />
          <span className='name'>I'm <span className='name-name' style={{ color: '#DA0037' }}>Pranav</span><br />A Web Developer</span>
          <p className='intro-para'>Welcome to Pranav Jain's Portfolio<br />
            Discover my projects, explore my skills, and get to know me better.<br />
            A passionate developer with a knack for creating innovative solutions.</p>
          <button className='hire-btn' role='button' onClick={contact}>Hire me</button>
          <div className='links'>
            <a href='https://www.github.com/PranavJain12' target='_blank' rel="noopener noreferrer">
              <img className='link-item' style={{ backgroundColor: 'white', borderRadius: '100%' }} src={github} alt="GitHub" />
            </a>
            <a href='https://www.linkedin.com/in/pranav-jain-32179722a/' target='_blank' rel="noopener noreferrer">
              <img className='link-item' src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </motion.div>
      <img className='bg' src={photo} alt="Background" />
    </section>
  );
}
