import React, { useEffect, useState } from "react";
import "./OrderSection.css";
import Navbar from "../navbar/Navbar";
import {getDocs,collection,doc,setDoc} from "firebase/firestore";
import {db,storage} from "../../firebase/FirebaseConfig"

const OrderSection = () => {
  const [allOrders,setAllOrders]= useState([]);
  const [allOrdersStatus,setAllOrdersStatus]= useState([]);
  const [keyword,setKeyword]= useState([]);

  const getAllOrder = async () => {
    setAllOrders([]);
    const querySnapshot = await getDocs(collection(db,"UserOrders"));
    querySnapshot.forEach((doc)=>{
      console.log(doc.id,"=>",doc.data())
      setAllOrders((prev)=>[...prev,doc.data()])
    })
  };

  useEffect(()=>{
    getAllOrder();
  },[])

  return (
    <div className="order-section">
      <Navbar />
      <h1 className="order-head1">ORDER - SECTION</h1>
      <div className="order-s1">
        <input
          type="text"
          placeholder="Search by order id or delivery status"
          className="search-bar"
        />
        <div className="order-s1-in">
          <p>Sort by Order Status</p>
          <select className="order-status-text">
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="ontheway">On the way</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <div className="order-container">
        <div className="order-row-card1">
          <p className="order-text">Order Id</p>
          <p className="order-text">Paid</p>
          <p className="order-text">Delivery Status</p>
          <p className="order-text">Delivery Boy Name</p>
          <p className="order-text">Delivery Boy Phone</p>

          <p className="order-text">Cost</p>
          <button>Show Details</button>
        </div>
        <div className="order-container">
          {/** DATA */}
          {
            allOrders.map((order)=>{
              return(
                <div className="order-row-card"></div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
