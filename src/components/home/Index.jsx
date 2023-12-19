import React from 'react';
import '../../assets/css/home/home.css';
import Image from "../../assets/img/avatar-2.svg";
import Socials from './Socials';

const Index = () => {
  return (
    <section className='home container' id='index'>
     <div className='intro'>
      <img src={Image} className='home_image' />
      <h2 className='home_name'>Katlego Prince Mashego</h2>
      <p className='home_desc'>I specialise in <span>DevOps</span>, <span>Software Development</span> and <span>Database Design.</span></p>
      <small>Reach me out in the below platforms:</small>
      <Socials />

      <a href='#contact' className='btn'>Hire Me</a>
     </div>
    </section>
  )
}

export default Index