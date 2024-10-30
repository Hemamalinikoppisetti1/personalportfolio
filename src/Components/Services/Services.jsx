import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Hema.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';
const Services = () => {
    const transition = {duration : 1, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
         <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
         <span>Services</span>
         <spane>I am a passionate full-stack developer with a focus on building
            <br />modern and responsive web applications</spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">

                <motion.div 
                whileInView={{left: '14rem'}}
                initial={{left: '25%'}}
                transition={transition}
                style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading ={'Front End Developer'}
                    detail = {"Building responsive and interactive user interfaces using Html,Css,Js,React"} 
                    />
                </motion.div>
                       {/*second card */}
                <motion.div 
                  initial={{ left: "-11rem", top: "12rem" }}
                  whileInView={{ left: "-4rem" }}
                  transition={transition}>
                       <Card
                       emoji={Glasses}
                       heading={"Back End Developer"}
                       detail={"Developing robust server side logic and databases"}
                       /></motion.div>
                       <motion.div 
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "12rem" }}
                        transition={transition}
                        style={{ top: "19rem", left: "12rem" }}>
                       <Card
                       emoji={Humble}
                       heading={"UI/UX"}
                       detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
                       />
                       </motion.div>
                       <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services;