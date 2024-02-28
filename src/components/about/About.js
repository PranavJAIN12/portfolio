import React from 'react'
import './About.css'
export default function About() {
  return (
    <section className="about">
        <span className='about-title'>About <span style={{color: "#DA0037"}}>Me</span></span>
        <span className='about-data'>Hello! I'm Pranav Jain, currently pursuing my Bachelor's degree in Computer Science and Engineering. With a passion for technology and a keen interest in problem-solving, I am dedicated to honing my skills as a developer and coder.<br/>In addition to my technical pursuits, I have a strong foundation in website development methodologies and practices. From designing efficient algorithms to implementing scalable solutions, I am committed to delivering high-quality software that meets the needs of users and exceeds expectations.</span>
        <section id="skills">
        <div class="skills-data">
           <p style={{color: "#8a90a2"}}>I'm expert in</p>
            <span style={{fontSize: "3rem", fontWeight: "900"}}>Skills</span>
            <p>Continuously developing and expanding my skill set:</p>
        </div>
        
        
        <div class="skill-card">
            <div class="container">
                <div class="card">
                  <img src="images/html.png" alt="Skill 1"/>
                  <p>Skill 1</p>
                </div>
                <div class="card">
                  <img src="images/css.png" alt="Skill 2"/>
                  <p>Skill 2</p>
                </div>
                <div class="card">
                  <img src="images/js.png" alt="Skill 3"/>
                  <p>Skill 3</p>
                </div>
                
                
              </div>            
        </div>
    </section>

    </section>
  )
}
