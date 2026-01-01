import React from 'react'
import '../Style/Footer.css'
import { Link } from 'react-router-dom';
import m1 from '../Footerimg/cal1.png'
import mail from '../Footerimg/mail1.png'
import loc from '../Footerimg/locs.png'
import time from '../Footerimg/t1.png'

const Footer = () => {
  return (

    <div className='footer'>

      <div className='lbl'>
        <p><b>Contact Informatoin</b></p>
        <ul>
          <li><img src={m1} alt='mob' height="43px" width="43px"></img> +91 95228 78526</li>
          <li><img src={mail} alt='mob' height="41px" width="41px"></img> sweetdelights11@gmail.com</li>
          <li><img src={time} alt='mob' height="40px" width="39px"></img> 9AM - 8PM, Mon - Sat</li>
          <li><img src={loc} alt='mob' height="41px" width="41px"></img> Ahmedabad, Gujarat, India</li>
          <li></li>
        </ul>
      </div>

      <div className='link'>
        <ul > Importnat Links
          <br />
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <br />
      </div>


      <div className='follow'>
        <ul className='icons'>Follow Us
          <br />
          <li class="fa fa-facebook"></li>
          <li class="fa fa-twitter"></li>
          <li class="fa fa-instagram"></li>
        </ul>
        <br /><br />
      </div>

      <br /><hr />

      <footer className="fcopy">
        <h4>&copy; 2024 Sweet Delights. All rights reserved.</h4>
      </footer>
    </div>
  )
}
export default Footer