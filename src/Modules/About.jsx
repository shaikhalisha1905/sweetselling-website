import React from 'react'
import '../Style/About.css'
import wall from '../Aboutimg/aboutwall.webp'
import sweet from '../Aboutimg/cate.webp'
const About = () => {
  return (
    <>

      <div className='image'>
        <img src={wall} className='wall' alt='about' style={{ width: "100%", height: "550px" }} />
        <div className='centered'>
          <h2>Crafted with Tradition,<br /> &nbsp; Inspired by Passion</h2>
          <p>A harmony of timeless flavors and contemporary craftsmanship in every bite.</p>
        </div>
      </div>

      <div className='about'>
        <img src={sweet} alt='about'/>
        <div className='intro'>
            <h1>About Us</h1>
            <p>After serving so many customers, today we can proudly say<br/> that our shop,<b> Sweet Delights</b>, situated at area, city, state,<br/> is home to a wide range of sweets that cater to the diverse<br/> taste buds of every patron. All of our delicacies are made<br/> using unique recipes that will leave a memorable aftertaste <br/> in your mouth. You can call for sweets in times of sudden <br/> sweet cravings or when you wish to complete a meal with <br/> a delightful dessert...!!
            </p>
        </div> 
      </div>
    </>
  )
}

export default About
