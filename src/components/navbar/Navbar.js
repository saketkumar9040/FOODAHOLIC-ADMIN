import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import image from "../../assets/black-texture.jpg"

const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"repeat" }}>
      <div className="nav-left">
        <div className="head-container">
          <FastfoodIcon
            style={{ fontSize: "40px", backgroundColor: "transparent",marginRight:"10px" }}
          />
          <h1 className="head-text">FOODAHOLIC</h1>
        </div>
      </div>
      <div className="nav-right">
        <Link
          to="/orders"
          style={{ textDecoration: "none", backgroundColor: "transparent" }}
        >
          <p>ORDERS</p>
        </Link>
        <Link
          to="/addfood"
          style={{ textDecoration: "none", backgroundColor: "transparent" }}
        >
          <p>ADD FOOD</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
