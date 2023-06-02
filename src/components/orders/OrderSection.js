import React, { useEffect, useState } from "react";
import "./OrderSection.css";
import Navbar from "../navbar/Navbar";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/FirebaseConfig";

const OrderSection = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [allOrdersStatus, setAllOrdersStatus] = useState([]);
  const [keyword, setKeyword] = useState([]);

  const getAllOrder = async () => {
    setAllOrders([]);
    const querySnapshot = await getDocs(collection(db, "UserOrders"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, "=>", doc.data());
      setAllOrders((prev) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    getAllOrder();
  }, []);
  
  const changeOrderStatus = (id,orderData,status) => {
    const docRef = doc(db,"UserOrders",id);
    const data = {
      ...orderData,
      orderStatus:status
    }
    setDoc(docRef,data)
    .then(()=>{
      alert("Status updated Successfully")
    })
    .catch((error)=>{
      alert("Failed to update status",error);
    })
    getAllOrder();
  }
  const changeDeliveryBoyName = (id,orderData,name) => {
    const docRef = doc(db,"UserOrders",id);
    const data = {
      ...orderData,
      deliveryBoyName:name
    }
    setDoc(docRef,data)
    .then(()=>{
      alert("Delivery Boy name updated Successfully")
    })
    .catch((error)=>{
      alert("Failed to update Delivery Boy name",error);
    })
    getAllOrder();
  }
  const changeDeliveryBoyphone = (id,orderData,phone) => {
    const docRef = doc(db,"UserOrders",id);
    const data = {
      ...orderData,
      deliveryBoyPhone:phone
    }
    setDoc(docRef,data)
    .then(()=>{
      alert("Delivery boy Phone updated Successfully")
    })
    .catch((error)=>{
      alert("Failed to update Delivery boy Phone",error);
    })
    getAllOrder();
  }

  console.log(allOrders);
  return (
    <div className="order-section" >
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
          <select className="order-status-text" >
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
          {allOrders.map((order) => {
            return <div className="order-row-card">
              <p className="order-text">{order.orderid}</p>
              <p className="order-text">{order.orderPayment}</p>
              <div className="order-card-in">
                {
                  order.orderStatus === "pending" && 
                  <select onChange={(e)=>{
                    changeOrderStatus(order.orderid,order,e.target.value)
                    }}>
                  <option value="pending">Pending</option>
                  <option value="ontheway">On the way</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                  </select>
                }
                {
                  order.orderStatus === "ontheway" && 
                  <select onChange={(e)=>{
                    changeOrderStatus(order.orderid,order,e.target.value)
                    }}>
                  <option value="pending">Pending</option>
                  <option value="ontheway">On the way</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                  </select>
                }
                {
                  order.orderStatus === "delivered" && 
                  <select onChange={(e)=>{
                    changeOrderStatus(order.orderid,order,e.target.value)
                    }}>
                  <option value="delivered">Delivered</option>
                  <option value="pending">Pending</option>
                  <option value="ontheway">On the way</option>
                  <option value="cancelled">Cancelled</option>
                  </select>
                }
                {
                  order.orderStatus === "cancelled" && 
                  <p className="order-text">{order.orderStatus}</p>
                }
              </div>
              
              { // DELIVERY BOY NAME
                order.deliveryBoyName ?  
                <p className="order-text">{order.deliveryBoyName}</p>:
                <input 
                   type="text" 
                   placeholder="Enter Name" 
                   className="order-input" 
                   onBlur={(e)=>{
                    changeDeliveryBoyName(order.orderid,order,e.target.value)
                   }}
                />
              }
              { // DELIVERY BOY PHONE
                order.deliveryBoyPhone ?  
                <p className="order-text">{order.deliveryBoyPhone}</p>:
                <input 
                   type="text" 
                   placeholder="Enter phone" 
                   className="order-input"
                   onBlur={(e)=>{
                    changeDeliveryBoyphone(order.orderid,order,e.target.value)
                   }}
                   />
              }
              <p className="order-text">{order.orderCost}</p>
              <button className="show-detail-button">Show Details</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
