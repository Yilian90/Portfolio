import React from 'react'
import './contact.css'
import Languages1 from '../../assets/css.png'
import Languages2 from '../../assets/figma.png'
import Languages3 from '../../assets/html.png'
import Languages4 from '../../assets/react.png'
import EmailIcon from '../../assets/emailIcon.png'
import GithubIcon from '../../assets/githubIcon.png'
import LinkedinIcon from '../../assets/linkedinIcon.png'

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id="clients">
          <h1 className='contactPageTitle'>My Programming Languages</h1>
          <p className='clientDesc'>
              I have experience  with these technologies
          </p>
          <div className="clientImgs">
            <img src={Languages1} alt="Client" className="clientImg" />
            <img src={Languages2} alt="Client" className="clientImg" />
            <img src={Languages3} alt="Client" className="clientImg" />
            <img src={Languages4} alt="Client" className="clientImg" />
        </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm">
              <input type="text" className="name" placeholder="Your Name" />
              <input type="email" className="email" placeholder="Your Email" />
              <textarea className ="msg" name="message" rows="5" placeholder="Your Message"></textarea> 
              <button type="submit" value="send" className="submitBtn">Submit</button>
              <div className="links">
                  <img src={EmailIcon} alt="Email" className="link" />
                  <img src={GithubIcon} alt="Github" className="link" />
                  <img src={LinkedinIcon} alt="Linkedin" className="link" />
              </div>
            </form>
        </div>
    </section>
  )
}
export default Contact