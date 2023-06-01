import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/addfood");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="main-container">
      <div className="title">Login</div>
      <form className="form-container">
        <label className="text">E-mail</label>
        <input
          type="email"
          name="email"
          className="input-box"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label className="text">password</label>
        <input
          type="text"
          name="name"
          className="input-box"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <div className="buttonContainer">
        <button type="submit" className="button" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
