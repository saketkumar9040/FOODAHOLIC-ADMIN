import React, { useState } from 'react';
import {firebase} from "../../firebase/FirebaseConfig" 

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
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
            type="text"
            name="name"
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