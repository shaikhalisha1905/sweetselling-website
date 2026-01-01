import React from 'react';
import 'react-dom';
import '../Style/Header.css';
import myimg from '../Logoimg/logo2.png';
import searchbtn from '../Logoimg/search-w.png'
import profile from '../Logoimg/profile.png'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";


const Header = (props) => {

    const search = () => {
        let ser1 = document.getElementById('ser').value;
        if (ser1 == "product") {
            window.location.href = "/product";
        }
        else if (ser1 == "contact") {
            window.location.href = "/contact";
        }
        else if (ser1 == "about") {
            window.location.href = "/about";
        }
        else if (ser1 == "home") {
            window.location.href = "/";
        }
        else if (ser1 == "kajukatli") {
            window.location.href = "/kajukatlipage";
        }
        else if (ser1 == "dryfruit") {
            window.location.href = "/dryfruit";
        }
        else if (ser1 == "ghee") {
            window.location.href = "/gheesweet";
        }
        else if (ser1 == "other") {
            window.location.href = "/othersweet";
        }
    }

    return (
        <>
        
            <div className='logo'>
                <Link to="/"><img src={myimg} alt="img"></img></Link>
                
                <Link to="/cart"><button className="btnorder">
                    <span>Order</span>&nbsp;&nbsp;
                    <FaCartShopping className="text-black" />&nbsp;
                    <sup style={{ fontWeight: "bold", fontSize: "15px", position: "relative"}}>{props.count}</sup>
                </button></Link>

                <a href='http://localhost:3001/'><img className="prof" src={profile} alt="profile" height="40px" width="50px"></img></a>
            </div>


            <div className='navbar'>
                <div className='list'>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/product">OUR PRODUCT</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>
                
                <div className="serbox">
                    <input type="text" placeholder="Search" id='ser' autoComplete='off'></input>
                    <img src={searchbtn} alt="" onClick={search}></img>

                    <Link to="/login">
                        <button className='logbtn'>
                            <span>Login</span>
                        </button>
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Header;