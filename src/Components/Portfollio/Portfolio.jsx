import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Calc from "../../img/Calc.png";
import ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import hoc from "../../img/hoc.png";
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from "react";


const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portfolio" id="Portfolio">

            { /* heading */ }
            <span style={{color: darkMode? 'white': ''}} >Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Calc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio