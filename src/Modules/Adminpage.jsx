import React from 'react';
import 'react-dom';
import { Link } from 'react-router-dom';
const Adminpage = () => {
  return ( 
    <>
        <div>
        <h1>Admin page</h1>
            {/* <button><a href="http://localhost:3003/">user</a></button> */}
            <Link to="http://localhost:3003/">users</Link><br/>
            <br/><br/><br/><br/>
        </div>
    </>

)
}

export default Adminpage
