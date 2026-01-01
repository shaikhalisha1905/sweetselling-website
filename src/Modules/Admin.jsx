import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center", color: "rgb(194, 148, 79)", fontWeight: "bold", fontFamily: "inherit" }}>Admin page</h1><br />
      <center>
        <Link to="http://localhost:3003/" style={{ fontSize: "22px", textDecoration: "none", color: "brown", fontWeight: "bold", backgroundColor: "rgb(212, 165, 107)", borderRadius: "5px" }}>Users</Link><br /><br />
        <a href="http://localhost:3000/ProductForm" style={{ fontSize: "22px", textDecoration: "none", color: "brown", fontWeight: "bold", backgroundColor: "rgb(212, 165, 107)", borderRadius: "5px" }}>Manage Products</a><br /><br />
        <a href="http://localhost:3000" style={{ fontSize: "22px", textDecoration: "none", color: "brown", fontWeight: "bold", backgroundColor: "rgb(212, 165, 107)", borderRadius: "5px" }}>Log Out</a>
      </center>

      <br /><br /><br /><br />
    </div>
  )
}

export default Admin
