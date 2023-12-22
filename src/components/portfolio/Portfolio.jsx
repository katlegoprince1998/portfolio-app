import React from 'react';
import "../../assets/css/portfolio/portfolio.css";
import PortImage from "../../assets/img/blog-1.svg";

const Portfolio = () => {
  return (
    <div className='portfolio container' id='portfolio'>
      <h1 className='portfolio_heading'>Portfolio</h1>
         <div className='portfolio_container '>
          <div className='card'>
            <h2 className='card_heading'>MotorSport App</h2>
            <img src={PortImage} alt='motorsport' />
            <div className='portfolio_content'>
              <p portfolio_description>Full stack <span>Spring Boot</span>, <span>React JS</span> and <span>PostgreSQL</span> ecommerce application</p>
              <div className='portfolio_links '>
                <a href="">Source Code</a>
                <a href="">Reac More</a>
              </div>
            </div>
          </div>

          <div className='card'>
            <h2 className='card_heading'>MotorSport App</h2>
            <img src={PortImage} alt='motorsport' />
            <div className='portfolio_content'>
              <p portfolio_description>Full stack <span>Spring Boot</span>, <span>React JS</span> and <span>PostgreSQL</span> ecommerce application</p>
              <div className='portfolio_links'>
                <a href="">Source Code</a>
                <a href="">Reac More</a>
              </div>
            </div>
          </div>
          
          <div className='card'>
            <h2 className='card_heading'>MotorSport App</h2>
            <img src={PortImage} alt='motorsport' />
            <div className='portfolio_content'>
              <p portfolio_description>Full stack <span>Spring Boot</span>, <span>React JS</span> and <span>PostgreSQL</span> ecommerce application</p>
              <div className='portfolio_links grid'>
                <a href="">Source Code</a>
                <a href="">Reac More</a>
              </div>
            </div>
          </div>
          
          
         </div>
    </div>
  )
}

export default Portfolio