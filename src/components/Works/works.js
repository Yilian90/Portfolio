import React from 'react';
import './works.css'

//fluid container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import MobiklinikImg from '../../assets/mobiklinikImg.png'
// import Mobiklinik from '../../assets/mobiklinik.apk'
// import Cupcake from '../../assets/beauty-flower-cupcake.png'
// import Portfolio3 from '../../assets/portfolio-3.jpg'
// import Portfolio4 from '../../assets/portfolio-4.jpeg'
// import Portfolio5 from '../../assets/portfolio-5.jpeg'
// import Portfolio6 from '../../assets/portfolio-6.jpeg'


const worksData = [
  {
    id: 1,
    image: require('../../assets/mobiklinikImg.png'),
    title: 'Mobiklinik',
    description: 'This project is an android application for booking appointments with mobiklinik in Kuala Lumpur. This project is created using Figma for design UI and Kotlin language for the coding.',
    link: 'https://www.instagram.com'
  },
  {
    id: 2,
    image: require('../../assets/beauty-flower-cupcake.png'),
    title: 'Beauty Flower Cupcake',
    description: 'This website is created use Bootstrap language for the coding.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../../assets/portfolio-3.jpg'),
    title: 'Coffee Talk',
    description: 'This mobile chatting app is an android application for create chatting group using Java language.',
    link: 'https://www.google.com'
  }
]

const Works = () => {
  return (
    <section id='works'>
        {/* <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDecs'>I take pride in paying attention to the smallest details and making sure that my works is pixel perferct. I am excited to bring my skills and experience to help businesses achieve their goals amd create a strong online presence.</span> */}
        <div className='worksImgs'>
        <section id="works" className='block blog-block'>
           <Container fluid>
              <div className='title-holder'>
                <h2>My Latest Projects</h2>
                <div className='subtitle'>get my latest projects and details of the projects</div>
              </div>
              <Row>
                {
                  worksData.map((work) => {
                    return(
                      <Col sm={4} key={work.id}>
                      <div className="holder">
                      <Card>
                        <Card.Img className='worksImgs' variant="top" src={work.image} />
                        <Card.Body>
                          <Card.Title>{work.title}</Card.Title>
                          <Card.Text>
                           {work.description}
                          </Card.Text>
                          <a href={work.link} className="btn btn-primary">VISIT<i class="fas fa-chevron-right"></i></a>
                        </Card.Body>
                      </Card>
                      </div>
                    </Col>
                    );
                  })
                }
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