import React from 'react'
import "../../assets/css/skills/skills.css";
import AboutImage from "../../assets/img/work-1.svg";

const Skills = () => {
  return (
    <section className='skills container section' id='skills'>
    <h1 className='section_title'>Proffessional Skills</h1>
     <div className='skills_container grid'>
       <img src={AboutImage} alt='image' />
       <div className='skills_data grid'>
         <div className='skill_info'>
           <ul className='section_one'> 
              <li>Java 21</li>
              <li>Spring Boot</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Python</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>NEXT JS</li>
              <li>Docker</li>
              <li>Jenkins</li>
              
           </ul>
          
         </div>
         <div className='technical grid'>
           <div className='technical_data'>
            
               <ul className='section_one'>
               <li>Kubernetes</li>
                  <li>PostgreSQL</li>
                  <li>MySQL Workbench</li>
                  <li>MongoDB</li>
                  <li>Database Design</li>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Unit Testing</li>
                  <li>Integration Testing</li>
                  <li>Kafka</li>
               </ul>
         </div>
       </div>
     </div>
     </div>
   </section>
  )
}

export default Skills