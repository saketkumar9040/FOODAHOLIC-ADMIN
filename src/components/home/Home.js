import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';
import backgroundImage from "../../assets/background-image.jpg"

const Home = () => {
  
  return (
    <div className="home-container"  style={{ backgroundImage:`url(${backgroundImage})`,
    backgroundRepeat:"no-repeat",objectFit:"cover",backgroundSize:"cover",width:"100%",height:"100%"}}>
        <div className="title">Welcome to Foodaholic</div>
        <Link to="/login"  style={{ textDecoration: 'none' }}>
        <div className="buttonContainer">
            <button type="submit" className="button" >
            Login In
            </button>
          </div>
          </Link> 
          <div className="or-text">Or</div>
          <Link to="/signup"  style={{ textDecoration: 'none' }}>
          <div className="buttonContainer">
            <button type="submit" className="button" >
              Sign Up
            </button>
          </div>
          </Link> 
    </div>
  )
}

export default Home