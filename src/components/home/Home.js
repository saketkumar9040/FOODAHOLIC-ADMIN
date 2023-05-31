import React, { useState } from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="home-container">
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