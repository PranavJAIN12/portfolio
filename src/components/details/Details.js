import React from "react";
import "./Details.css";
import photo from "../../assets/portfolio-1.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";

export default function Details() {
  return (
    <section id="details">
      <span className="details-title">
        About <span style={{ color: "#DA0037" }}>Me</span>
      </span>
      <div className="detailsec">
        <img src={photo} alt="photo" className="details-photo"></img>
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
           <span style={{fontWeight: '650', textAlign: 'left', paddingTop:'2rem'}}>Expertise</span>: Full Stack Web Development<br/>
           <span style={{fontWeight: '650', textAlign: 'left'}}>Experience</span> : 4 Years<br/>
           <span style={{fontWeight: '650', textAlign: 'left'}}>E-mail</span> :  masterpranavjain2@gmail.com
        </p>
        <div className="details-links">
          <img src={linkedin} alt="linkdein" className="links-img" />
          <img src={twitter} alt="twitter" className="links-img" />
          <img src={github} alt="github" className="links-img" />
        </div>
      </div>
    </section>
  );
}
