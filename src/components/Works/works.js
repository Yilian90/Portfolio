import React from 'react';
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.jpeg'
import Portfolio2 from '../../assets/portfolio-2.jpeg'
import Portfolio3 from '../../assets/portfolio-3.jpeg'
import Portfolio4 from '../../assets/portfolio-4.jpeg'
import Portfolio5 from '../../assets/portfolio-5.jpeg'
import Portfolio6 from '../../assets/portfolio-6.jpeg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDecs'>I take pride in paying attention to the smallest details and making sure that my works is pixel perferct. I am excited to bring my skills and experience to help businesses achieve their goals amd create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works