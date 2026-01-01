import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../Style/Home.css'
import bg1 from '../Bgimg/bg1.jpeg'
import bg2 from '../Bgimg/a4.webp'
import bg3 from '../Bgimg/a8.webp'
import bg4 from '../Bgimg/a3.webp'
import Gallery from './Gallery';
import Cardslide from './Cardslide';


const Home = () => {

    return (
        <>
        <div>
            <Fade>
                <div className="each-slide">
                    <img src={bg1} alt='bg1'/>
                </div>

                <div className="each-slide">
                     <img src={bg2} alt='bg2'/>
                </div>

                <div className="each-slide">    
                    <img src={bg3} alt='bg3'/>
                </div>

                <div className="each-slide">    
                    <img src={bg4} alt='bg3'/>
                </div>
            </Fade>
            </div>
            <div>
                <Gallery/>
                <Cardslide/>
            </div>
        </>
    );
};

export default Home