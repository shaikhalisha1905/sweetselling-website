import React from 'react'
import '../Style/Catagory.css'
import im1 from '../Catagoryimg/KajuKatli2.webp'
import im2 from '../Catagoryimg/dry-fruit.webp'
import im3 from '../Catagoryimg/milkcake.webp'
import im4 from '../Catagoryimg/cashew-modak.webp'
import { Link } from 'react-router-dom'

const Catagory = () => {
  return (
    <>
      <div className='catagory'>
        <h1>Shop By Catagory</h1>

        <Link to="/kajukatlipage">
          <img src={im1} alt="cat1" style={{borderRadius:"50%",height:"250px",width:"250px",marginLeft:"120px"}}></img>
        </Link>
        <p style={{fontSize:"28px",marginLeft:"175px",marginTop:"18px",fontWeight:"bold",color:"rgb(195, 131, 48)"}}>Kaju Katli</p>

        <Link to="/dryfruit">
          <img src={im2} alt="cat1" style={{borderRadius:"50%",height:"250px",width:"250px",marginLeft:"470px",marginTop:"-435px"}}></img>
        </Link>
        <p style={{fontSize:"28px",marginLeft:"480px",marginTop:"-88px",fontWeight:"bold",color:"rgb(195, 131, 48)"}}>Dry Fruits Sweet</p>

        <Link to="/gheesweet">
          <img src={im3} alt="cat1" style={{borderRadius:"50%",height:"250px",width:"250px",marginLeft:"815px",marginTop:"-430px"}}></img>
        </Link>
        <p style={{fontSize:"28px",marginLeft:"853px",marginTop:"-85px",fontWeight:"bold",color:"rgb(195, 131, 48)"}}>Ghee Sweets</p>

        <Link to="/othersweet">
          <img src={im4} alt="cat1" style={{borderRadius:"50%",height:"250px",width:"250px",marginLeft:"1150px",marginTop:"-428px"}}></img>
        </Link>
        <p style={{fontSize:"28px",marginLeft:"1190px",marginTop:"-90px",fontWeight:"bold",color:"rgb(195, 131, 48)"}}>Other Sweets</p>

      </div>
    </>
  )
}

export default Catagory
