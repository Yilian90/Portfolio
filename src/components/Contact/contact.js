import React, { useRef } from 'react'
import './contact.css';
import GithubIcon from '../../assets/githubIcon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lzdtnxg', 'template_goswqld', form.current, 'X1nMETgi0Eq9IKWiV')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id="clients">
          <h1 className='contactPageTitle'>My Programming Languages</h1>
          <p className='clientDesc'>
              I have experience  with these technologies
          </p>
          <div className="clientImgs">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="Client" className="clientImg" title="React"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="Client" className="clientImg" title="HTML 5"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="Client" className="clientImg" title="CSS 3"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Client" className="clientImg" title="Java"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Client" className="clientImg" title="GitHub"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg" alt="Client" className="clientImg" title="Kotlin"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Client" className="clientImg" title="Git"/>
             <img src="https://img.jsdelivr.com/github.com/firebase.png" alt="Client" className="clientImg" title="Firebase"/>
            <img src="https://img.jsdelivr.com/github.com/twbs.png" alt="Client" className="clientImg" title="Bootstrap"/>
        </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder="Your Name" name='from_name' />
              <input type="email" className="email" placeholder="Your Email" name='from_email' />
              <textarea className ="msg" name="message" rows="5" placeholder="Your Message"></textarea> 
              <button type="submit" value="Send" className="submitBtn">Submit</button>
              <div className="links">
                  <a href="https://github.com/Yilian90">
                    <img src={GithubIcon} alt="Github" className="link" />
                  </a>
                  <a href="www.linkedin.com/in/aty-apriani">
                    <img src="https://img.jsdelivr.com/github.com/linkedin.png" alt="Linkedin" className="link" />
                  </a>
              </div>
            </form>
        </div>
    </section>
  )
}
export default Contact