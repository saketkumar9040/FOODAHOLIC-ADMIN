import React, { useEffect, useState } from "react";
import "./ShowOrderDetails.css";
import Navbar from "../navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import orderDetailsBackground from "../../assets/order-details-background.jpg"

const ShowOrderDetails = () => {
  const { orderid } = useParams();
  console.log(orderid);

  const [orderData, setOrderData] = useState([]);

  const getOrderData = async () => {
    const docRef = await doc(db, "UserOrders", orderid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setOrderData(docSnap.data());
    } else {
      console.log("No such document exists");
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  console.log(orderData);

  return (
    <>
      <Navbar />
      <div className="order-section"style={{ backgroundImage:`url(${orderDetailsBackground})`,
    backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%"}}>
        <Link to="/orders" style={{backgroundColor:"transparent"}}>
          <button className="go-back-button">Go Back</button>
        </Link>
        <h1 className="order-heading">ORDER - DETAILS</h1>
        <div className="order-details-form">
          <div className="order-details-row">
            <p>Order Id</p>
            <p>{orderData.orderid}</p>
          </div>
          <div className="order-details-row">
            <p>Customer Name</p>
            <p>{orderData.ordererName}</p>
          </div>
          <div className="order-details-row">
            <p>Customer Address</p>
            <p style={{alignSelf:"flex-end",marginLeft:"280px"}}>{orderData.ordererAddress}</p>
          </div>
          <div className="order-details-row">
            <p>Customer Phone</p>
            <p>{orderData.ordererPhone}</p>
          </div>
          <div className="order-details-row">
            <p>Order status</p>
            <p>{orderData.orderStatus}</p>
          </div>
          <div className="order-details-row">
            <p>Order total</p>
            <p>{orderData.paymentTotal}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowOrderDetails;
