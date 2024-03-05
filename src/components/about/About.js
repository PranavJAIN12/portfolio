import React from 'react'
import './About.css'
import html from '../../assets/html5.png'
import css from '../../assets/css3.png'
import git from '../../assets/git.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'
import cpp from '../../assets/cpp.png'
import spiral from '../../assets/spiral.png'


export default function About() {
  return (
    <section className="about">
        {/* <span className='about-title'>About <span style={{color: "#DA0037"}}>Me</span></span>
        <span className='about-data'>Hello! I'm Pranav Jain, currently pursuing my Bachelor's degree in Computer Science and Engineering. With a passion for technology and a keen interest in problem-solving, I am dedicated to honing my skills as a developer and coder.<br/>In addition to my technical pursuits, I have a strong foundation in website development methodologies and practices. From designing efficient algorithms to implementing scalable solutions, I am committed to delivering high-quality software that meets the needs of users and exceeds expectations.</span> */}
        <section id="skills">
        <div className="skills-data">
           <p style={{color: "#8a90a2", marginTop:'2rem'}}>I'm expert in</p>
            <span style={{fontSize: "3rem", fontWeight: "900"}}>Skills</span>
            <p>Continuously developing and expanding my skill set:</p>
        </div>
        
        
        <div className="skill-card">
        <img src={spiral} alt='spiral' className='spiral'></img>
        <img src={spiral} alt='spiral' className='spiral2'></img>
            <div className="container">
                <div className="card">
                  <img className='skill-img' src={html} alt="Skill 1"/>
                  {/* <p>Skill 1</p> */}
                </div>
                <div className="card">
                  <img src={css} alt="Skill 2"/>
                  {/* <p>Skill 2</p> */}
                </div>
                <div className="card">
                  <img src={js} alt="Skill 3"/>
                  {/* <p>Skill 3</p> */}
                </div>
                <div className="card">
                  <img src={git} alt="Skill 3"/>
                  {/* <p>Skill 4</p> */}
                </div>
                <div className="card">
                  <img src={react} alt="Skill 3"/>
                  {/* <p>Skill 4</p> */}
                </div>
                <div className="card">
                  <img src={bootstrap} alt="Skill 3"/>
                  {/* <p>Skill 4</p> */}
                </div>
                <div className="card">
                  <img src={cpp} alt="Skill 3"/>
                  {/* <p>Skill 4</p> */}
                </div>
                
                
              </div>            
        </div>
    </section>

    </section>
  )
}
