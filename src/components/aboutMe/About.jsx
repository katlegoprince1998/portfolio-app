import React from 'react';
import '../../assets/css/aboutMe/about.css';
import AboutImage from "../../assets/img/avatar-3.svg";


const About = () => {
  return (
    <section className='about container section' id='about'>
     <h1 className='section_title'>About Me</h1>
      <div className='about_conatainer grid'>
        <img src={AboutImage} alt='image' />
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>
            As an experienced software developer with over 
            a year in the field, I possess a strong knack for
             identifying patterns within complex problems and
              devising effective solutions. What sets me apart 
              is my persistent dedication to learning and my proactive 
              approach to acquiring new skills. I consistently seek out
               opportunities to enhance my capabilities, staying updated 
               with the latest technologies and methodologies in software development
            </p>
            <a href='' className='btn'>Download Resume</a>
          </div>
          <div className='about_expertise grid'>
            <div className='expertise_data'>
              <div className='expertise_titles'>
                <h3 className='expertise_name'>DevOps</h3>
                <span className='expertise_number'>40%</span>
              </div>
              <div className='expertise_bar'>
                <span className='expertise_percentage devops'></span>
            </div>
          </div>
          <div className='expertise_data'>
              <div className='expertise_titles'>
                <h3 className='expertise_name'>Developmemt</h3>
                <span className='expertise_number'>75%</span>
              </div>
              <div className='expertise_bar'>
                <span className='expertise_percentage fullstack'></span>
            </div>
          </div>
          <div className='expertise_data'>
              <div className='expertise_titles'>
                <h3 className='expertise_name'>Cloud</h3>
                <span className='expertise_number'>30%</span>
              </div>
              <div className='expertise_bar'>
                <span className='expertise_percentage cloud'></span>
            </div>
          </div>
          <div className='expertise_data'>
              <div className='expertise_titles'>
                <h3 className='expertise_name'>Database Design</h3>
                <span className='expertise_number'>80%</span>
              </div>
              <div className='expertise_bar'>
                <span className='expertise_percentage database'></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About