import React from 'react';
import './works.css'

//fluid container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MobiklinikImg from '../../assets/mobiklinikImg.png'
import Mobiklinik from '../../assets/mobiklinik.apk'
// import Cupcake from '../../assets/beauty-flower-cupcake.png'
// import Portfolio3 from '../../assets/portfolio-3.jpg'
// import Portfolio4 from '../../assets/portfolio-4.jpeg'
// import Portfolio5 from '../../assets/portfolio-5.jpeg'
// import Portfolio6 from '../../assets/portfolio-6.jpeg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDecs'>I take pride in paying attention to the smallest details and making sure that my works is pixel perferct. I am excited to bring my skills and experience to help businesses achieve their goals amd create a strong online presence.</span>
        <div className='worksImgs'>
        <section id="works" className='block works-block'>
           <Container fluid>
              <div className='title-holder'>
                <h2>My Latest Projects</h2>
                <div className='subtitle'></div>
              </div>
              <Row>
                <Col>1 of 1</Col>
              </Row>
           </Container>
        </section>
        {/* <div>
          <h2>Mobiklinik</h2>
          <p>This project is an android application for booking appointments with mobiklinik in Kuala Lumpur.
            <br/>This project is created using Figma for design UI and Kotlin language for the coding.
          </p>
          <img src={MobiklinikImg} alt=""  className="worksImg" />
            <a
                href={Mobiklinik}
                target="_blank"
                rel="noopener noreferrer">
                <button className='btn'>Download Mobiklinik.apk</button>
          </a>
          </div> */}
            {/* <img src={Mobiklinik} alt=""  className="worksImg" />
            <p>download mobiklinik.apk</p>
            <img src={Cupcake} alt="" className="worksImg" />
            <p></p>
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" /> */}
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works