import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Style/Login.css'

export default function Login() {

  //    const changeWindow=()=>{
  //     window.open(<Body/>);
  //    } 
  const initialvalues = { username: "", password: "" };
  const [formvalues, setFrormvalues] = useState(initialvalues);
  const [formerrors, setFormerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrormvalues({ ...formvalues, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormerrors(validate(formvalues));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).lenght === 0 && isSubmit) {
      console.log(formvalues);
      <p>form submited</p>
    }
  })

  const validate = (values) => {
    let Admin_name = "alisha";
    let Admin_password = "alisha19";
    let flag = 1;
    const errors = {}
    if (!values.username) {
      errors.username = "Username is required!";
      flag = 0;
    }
    else {
      flag = 1;
    }
    if (!values.password) {
      errors.password = "Password is required!";
      flag = 0;
    }
    else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
      flag = 0;
    }
    else {
      flag = 1;
    }

    if (values.username == Admin_name && values.password == Admin_password) {
      alert("Login successfull...");
      window.location.href = "/admin";

    }
    else if (flag == 1) {
      alert("Login successfull...");
       window.location.href = "/";                   
    }
    return errors
  }
  return (
    <div className="container">
      <br /><br /><br /><br />
      <form onSubmit={handleSubmit}>
        <div>
          <h1>LogIn!</h1>
          <p style={{color:"brown" ,marginLeft:"492px",marginTop:"-30px",fontSize:"23px"}}>Please Enter Data into Fields</p>
          <div className="login_Controll">
            <label>Username : </label><br></br>
            <input type="text" name="username" placeholder="Username" style={{marginLeft:"490px",borderRadius: "20px", borderColor: "gray" ,height:"40px",width:"300px"}} value={formvalues.username} onChange={handleChange} />
            <p style={{ color: "red" ,fontSize:"20px",marginLeft:"490px"}}>{formerrors.username}</p>

            <label>Password : </label><br></br>
            <input type="password" name="password" placeholder="Password" style={{ marginLeft:"490px",borderRadius: "20px", borderColor: "grey" ,height:"40px",width:"300px" }} value={formvalues.password} onChange={handleChange} />
            <p style={{ color: "red",fontSize:"20px",marginLeft:"490px"}}>{formerrors.password}</p>
          </div>
          <input type="submit" align="right" value="Submit" className='logbtnsub' /*onClick={redi}*/></input>
          <p style={{ fontSize: "20px", fontFamily: "Garamond", marginTop: "-90px", marginLeft: "-400px", color: "black" }}>Or  <Link to='/register'>Register</Link></p>
        </div>
       

      </form><br/>
      {/* <Link to='/'><input type="button" value="Log Out" style={{marginTop:"20px",marginLeft:" 200px",borderRadius:"10px"}} align="right" className="logout_button"></input>
      </Link> */}
<br/><br/>
    </div>
  )
}