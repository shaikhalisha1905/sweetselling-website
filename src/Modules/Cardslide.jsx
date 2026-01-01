import React from 'react'
import '../Style/Cardslide.css'
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';

import a1 from '../Cardimg/pistachio_baklava.webp'
import a2 from '../Cardimg/coconut_modak.webp'
import a3 from '../Cardimg/biscoff_baklava.webp'
import a4 from '../Cardimg/almond_kunafa.webp'
import a5 from '../Cardimg/dryfruit_kunafa.webp'

import b1 from '../Cardimg/chocobarfi.jpg'
import b2 from '../Cardimg/kesar_peda.webp'
import b3 from '../Cardimg/kajukatli2.jpg'
import b4 from '../Cardimg/barfi.jpg'
import b5 from '../Cardimg/Rasmalai.jpg'

import home from '../Cardimg/home.webp'
import Catagory from './Catagory';

const Cardslide = () => {
    return (
        <>
            <div className="our-products">
                <h2>Our Products</h2></div>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ display: "flex" }}>
                        <div className="p-list">

                            <div className="p-card">
                                <img src={a1} alt="Ladoo" />
                                <h3>Pistachio Baklava</h3>
                                <p><b>₹ 1400</b>
                                    <br />Soft and creamy</p>
                            </div>

                            <div className="p-card">
                                <img src={a4} alt="Barfi" />
                                <h3>Almond Kunafa</h3>
                                <p><b>₹ 1550</b>
                                    <br />Sweet and Soft</p>
                            </div>


                            <div className="p-card">
                                <img src={a2} alt="Barfi" />
                                <h3>Coconut Modak</h3>
                                <p><b>₹ 500</b>
                                    <br />Soft and Delicious</p>
                            </div>

                            <div className="p-card">
                                <img src={a3} alt="Barfi" />
                                <h3>Biscoff Baklava</h3>
                                <p><b>₹ 1000</b>
                                    <br />Delicious and fresh</p>
                            </div>


                            <div className="p-card">
                                <img src={a5} alt="Barfi" />
                                <h3>Dry Fruit Kunafa</h3>
                                <p><b>₹ 1200</b>
                                    <br />Delicious and Soft</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="each-slide-effect">
                    <div style={{ display: "flex" }}>
                        <div className="p-list">

                            <div className="p-card">
                                <img src={b1} alt="Ladoo" />
                                <h3>Chocolate Barfi</h3>
                                <p><b>₹ 100</b>
                                    <br />Soft and creamy</p>
                            </div>

                            <div className="p-card">
                                <img src={b3} alt="Barfi" />
                                <h3>Kaju Katli</h3>
                                <p><b>₹ 250</b>
                                    <br />Sweet and Soft</p>
                            </div>


                            <div className="p-card">
                                <img src={b4} alt="Barfi" />
                                <h3>Pista Barfi</h3>
                                <p><b>₹ 500</b>
                                    <br />Soft and Delicious</p>
                            </div>

                            <div className="p-card">
                                <img src={b2} alt="Barfi" />
                                <h3>Kesar Peda</h3>
                                <p><b>₹ 150</b>
                                    <br />Delicious and fresh</p>
                            </div>


                            <div className="p-card">
                                <img src={b5} alt="Barfi" />
                                <h3>Rasmalai</h3>
                                <p><b>₹ 200</b>
                                    <br />Delicious and Soft</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

        <div className='view'>
        <Link to="/product"> <button><span>View All</span></button></Link>
        </div>
        <div>
            <Catagory/>
        </div>
        <div>
            <img src={home} alt="home" style={{width:"890px",marginLeft:"340px", marginTop:"35px"}}></img>
        </div>
        <br/>
        </>
    )
}

export default Cardslide