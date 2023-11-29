import React from 'react'
import './contact.css'
import Languages1 from '../../assets/css.png'
import Languages2 from '../../assets/figma.png'
import Languages3 from '../../assets/html.png'
import Languages4 from '../../assets/react.png' 
const Contact = () => {
  return (
    <section className='contactPage'>
        <div id="clients">
          <h1 className='contactPageTitle'>My </h1>
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

        </div>
    </section>
  )
}
export default Contact