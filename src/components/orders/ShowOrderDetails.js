import React from 'react';
import "./ShowOrderDetails.css";
import  Navbar from "../navbar/Navbar";
import { Link } from 'react-router-dom';

const showOrderDetails = () => {
  return (
    <div className='order-section'>
      <Navbar/>
      <Link to="/orders" style={{marginTop:"10px"}}>
        <button className='go-back-button'>Go Back</button>
      </Link>
    </div>
  )
}

export default showOrderDetails