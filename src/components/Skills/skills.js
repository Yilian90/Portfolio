import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.jpeg'

export const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        {/* <span className="skillDesc"> I am skilled and passionate web designer and mobile developer with 1 year experience using Java and Kotlin language.</span> */}
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, and JavaScrip, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className="skillBars">
          <div className="skillBar">
              <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>proficient use Figma in design the User Interface for mobile application.</p>
              </div>
          </div>
          <div className="skillBar">
              <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Web Design</h2>
                <p>Expertised in HTML, CSS, JavaScript, React and BootStrap to build website application. </p>
              </div>
          </div>
          <div className="skillBar">
              <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Mobile App Developer</h2>
                <p>Expertised in Java and Kotlin language to build mobile application for android devices.</p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default skills
