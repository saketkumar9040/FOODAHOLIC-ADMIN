import React from 'react';
import "./ShowOrderDetails.css";
import  Navbar from "../navbar/Navbar";
import { Link } from 'react-router-dom';

const showOrderDetails = () => {
  return (
    <div className='order-section'>
      <Navbar/>
      <Link to="/orders">
        <button className='go-back-button'>Go Back</button>
      </Link>
    </div>
  )
}

export default showOrderDetails