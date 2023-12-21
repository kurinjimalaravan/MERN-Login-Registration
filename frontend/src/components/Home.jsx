import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocust } from "@fortawesome/free-solid-svg-icons";

import home from '../assets/home1.jpg'

const Home = () => {
  function handleLogout() {
    alert('Logged Out successfully!');
  }
  
  return (
    <>
    <div style={{background:'linear-gradient(#00d5ff,#0095ff'}} className="container-fluid p-4 ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#F76B1C"}} to='/home' ><FontAwesomeIcon style={{color:"#E18728",marginRight:"10px"}} icon={faHouse} />HOME</Link>
          </b>
          <b>
            <Link style={{textDecoration:"none",marginLeft:"50px",color:"#F76B1C"}} to='/about' ><FontAwesomeIcon style={{color:"#E18728",marginRight:"10px"}} icon={faLocust} />ABOUT</Link>
          </b>
        </div>
        <div className="right-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#F76B1C"}} to='/profile' ><FontAwesomeIcon style={{color:"#E18728",marginRight:"10px"}} icon={faUser} />PROFILE</Link>
          </b>
          <Link style={{textDecoration:"none",marginLeft:"50px",color:"#F76B1C"}} to='/login'  onClick={handleLogout}><FontAwesomeIcon style={{color:"#E18728",marginRight:"10px"}} icon={faRightFromBracket} />Logout</Link>
        </div>
        
      </div>
      
    </div>
    <div>
      {/* <h3 className='m-5' style={{color:"darkred"}}>Welcome to the Explorer !</h3> */}
          <img src={home} alt="home" width={'100%'} height={'660px'}/>
    </div>
</>
  )
}


export default Home
