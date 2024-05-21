import React from 'react'
import './Portfolio.css'
// import work1 from '../../assets/portfolio-1.png'
// import work2 from '../../assets/portfolio-2.png'
import work3 from '../../assets/portfolio-3.png'
import work4 from '../../assets/portfolio-4.png'
import bulb from '../../assets/bulb.png'
import dailydose from '../../assets/dailydose.png'
import musclemapfit from '../../assets/musclemapfit.jpg'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <span className='portfolio-title'>My <span style={{color: "#DA0037"}}>Projects</span></span><br/>
      <img src={bulb} alt='bulb' className='bulb'/>  
      <span className='portfolio-data'>
        Hello! I'm Pranav Jain, currently pursuing my Bachelor's degree in Computer Science and Engineering. With a passion for technology and a keen interest in problem-solving, I am dedicated to honing my skills as a developer and coder
      </span>
      <div className='workImgs'>
        <div className='workColumn'>
          <div className="workItem">
            <img className='workImg' src={dailydose} alt=''></img>
            <button className='workBtn'>DailDose<br/>ReactJs, NewsAPI</button>
          </div>
          <div className="workItem">
            <img className='workImg' src={musclemapfit} alt=''></img>
            <button className='workBtn'>MuscleMapFit<br/>ReactJs, RapidAPI</button>
          </div>
        </div>
        <div className='workColumn'>
          <div className="workItem">
            <img className='workImg' src={work3} alt=''></img>
            <button className='workBtn'>Details</button>
          </div>
          <div className="workItem">
            <img className='workImg' src={work4} alt=''></img>
            <button className='workBtn'>Details</button>
          </div>
        </div>
      </div>
      <button className='seemore'>See More</button>
    </section>
  )
}
