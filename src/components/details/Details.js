/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Details.css";
import photo from "../../assets/portfolio-1.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import profilePic from '../../assets/profilepic.png'

export default function Details() {
  return (
    <section id="details">
      <span className="details-title">
        About <span style={{ color: "#DA0037" }}>Me</span>
      </span>
      <div className="detailsec">
        <img src={profilePic} alt="photo" className="details-photo" style={{height:"300px"}}></img>
        <p className="details-data">
          Hello! I'm Pranav Jain, currently pursuing my Bachelor's degree in
          Computer Science and Engineering. With a passion for technology and a
          keen interest in problem-solving, I am dedicated to honing my skills
          as a developer and coder.
          <br />
          In addition to my technical pursuits, I have a strong foundation in
          website development methodologies and practices. From designing
          efficient algorithms to implementing scalable solutions, I am
          committed to delivering high-quality software that meets the needs of
          users and exceeds expectations.<br/><br/>
           <span style={{fontWeight: '650', textAlign: 'left', paddingTop:'2rem'}}>Expertise</span>:  Web Development<br/>
           {/* <span style={{fontWeight: '650', textAlign: 'left'}}>Experience</span> : 4 Years<br/> */}
           <span style={{fontWeight: '650', textAlign: 'left'}}>E-mail</span> :  masterpranavjain2@gmail.com
        </p>
        <div className="details-links">
        <a href='https://www.linkedin.com/in/pranav-jain-32179722a/' target="_blank" rel="noopener noreferrer" ><img className='links-img' src={linkedin} alt="linkedin"></img></a>
        <a href='https://www.linkedin.com/in/pranav-jain-32179722a/' target="_blank" rel="noopener noreferrer" ><img className='links-img' src={twitter} alt="twitter"></img></a>
        <a href='https://www.github.com/PranavJain12' target="_blank" rel="noopener noreferrer" ><img className='links-img' src={github} alt="github"></img></a>

          
        </div>
      </div>
    </section>
  );
}
