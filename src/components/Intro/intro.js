import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import resume from '../../assets/atyResume.pdf';  //import $ npm install react-pdf
// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// PDF.js worker is enabled to render the PDF files without affecting page performance
// import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Aty</span><br />Website and <br />Mobile App Developer</span>
            <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.<br /> Expertised in build Websites and Android Mobile Apps.</p>
            <div>
            <a
                href={resume}
                download="atyResume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <button className='btn'>Download Resume</button>
          </a>
          </div>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;