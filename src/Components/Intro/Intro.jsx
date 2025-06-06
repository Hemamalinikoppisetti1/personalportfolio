import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import profile6 from '../../img/profile6.jpg';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

const Intro = () => {

const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
     <div className="intro" id="Home">
          <div className="i-left">
            <div className="i-name">
            <span style = {{color: darkMode? 'white': ''}}>Hy! I Am </span>
            <span>Hema Malini</span>
            <span> Java Full Stack Developer,I have a strong command over both front-end and back-end technologies.
                i am good at coding and i can learn new things quickly</span>
          </div>

          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <a href="https://github.com/Hemamalinikoppisetti1"> <img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/hema-malini-koppisetti-801a52302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com/itss_.himmuuu?igsh=NTVjYjB1d2wyOTZh"> <img src={Instagram} alt="" /></a>
    
          </div>
          </div>
          <div className="i-right">

          <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={profile6} alt="" />
            <motion.img 
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
             alt=""
             />
            <motion.div 
            initial={{ top: '-4%', left: '74%' }}
            whileInView={{left: '68%'}} 
            transition={transition}

            style={{top: '-4%' , left: '68%'}}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1='Fullstack' txt2='Developer'/>
            </motion.div>
              <motion.div
                initial={{ left: '9rem', top: '18rem' }}
                whileInView={{left: '0rem'}} 
                transition={transition}
                style={{top: '18rem', left: '0rem'}}
                className='floating-div'
                >
                <FloatingDiv image={thumbup} txt1='Hard' txt2='Worker'/>
            </motion.div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}>
            </div>
            <div className="blur"
            style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left:'-9rem'
            }}></div>
          </div>
     </div>
    );
}

export default Intro