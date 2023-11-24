import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Aty</span><br />Website Designer</span>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;