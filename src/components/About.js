import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'


const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p><b>Abhishek RG | Aspiring Developer</b> <hr></hr>

I am Abhishek RG, currently in my final year of pursuing a degree in Computer Science at Alvas Institute of Engineering and Technology. With a solid foundation in programming and web development, I am passionate about creating efficient and user-friendly digital solutions. My academic journey has equipped me with the skills and knowledge to tackle complex problems, and I am eager to apply these in real-world scenarios.
 </p>
                        <br />
                        <p> I’ve had the privilege of working with some experienced professionals which has enhanced my skills and rate of learning. My main focus these days is building accessible, inclusive products and digital experiences, as well as creating designs and illustrations. With my experience I have what it takes to solve real world problems</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
