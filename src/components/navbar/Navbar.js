import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <h1 className='head-text'><FastfoodIcon style={{fontSize:'35px',backgroundColor:"black"}}/>FOODAHOLIC</h1>
      </div>
      <div className='nav-right'>
        <Link  to="/orders" style={{textDecoration:"none",backgroundColor:"black",}}>
          <p >ORDERS</p>
        </Link>
        <Link to="/addfood" style={{textDecoration:"none",backgroundColor:"black"}}>
          <p>ADD FOOD</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;