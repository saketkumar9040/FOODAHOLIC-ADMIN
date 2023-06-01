import React, { useState } from 'react';
import { db , auth } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import {  useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import "./SignUp.css"

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
   
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      .then(async (userCredentials) => {
        // console.log(userCredentials)
       if(userCredentials?.user?.uid){
        const adminData ={
          name,
          email,
          phone,
          password,
          uid: userCredentials?.user?.uid,
        }
      const docRef = await addDoc(collection(db, "AdminData"), adminData);
      // console.log(docRef.id);
      alert("data added successfully. Please login to your account to continue...");
      navigate("/login");
      }})
      .catch((error)=>{
        console.log(error)
        alert(error.message)
      })// to refresh page after data is added
    } catch (error) {
      alert("Unable to Sign Up", error);
    }
  }

  return (
    <div className='main-container'>
      <div className="title">Sign Up</div>
      <form className="form-container">
          <label className="text">Name</label>
          <input
            type="text"
            name="name"
            className="input-box"
            onChange={(e) => {setName(e.target.value)}}
          />
          <br/>
          <label className="text">E-mail</label>
          <input
            type="email"
            name="email"
            className="input-box"
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br/>
          <label className="text">phone</label>
          <input
            type="numeric"
            name="phone"
            className="input-box"
            onChange={(e) => {setPhone(e.target.value)}}
          />
          <br/>
          <label className="text">password</label>
          <input
            type="password"
            name="password"
            className="input-box"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          </form>
          <div className="buttonContainer">
            <button type="submit" className="button" onClick={submitHandler} >
              Submit
            </button>
          </div>
    </div>
  )
}

export default SignUp;