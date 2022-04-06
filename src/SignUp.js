import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LogIn from "./LogIn";
import "./SignUp.css";

function SignUp() {
  const [file, setFile] = useState();
  function fileUpload(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div id="page">
      <form action="" id="sign-up-form">
        <div class="container">
          <div class="row align-items-start row justify-content-start">
            <div class="row ">
              <h1>Create Account</h1>
            </div>
            <div class="row ">
              <div class="col">
                <label for="username" className="m-4">Username</label>
              </div>
              <div class="col">
                <input id="username" className="m-4" type="text" placeholder="Enter Username" autoFocus required></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                <label for="password" className="m-4">Password</label>
              </div>
              <div class="col">
                <input id="password" className="m-4" type="password" placeholder="Enter Password" required></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                <label for="repeatPassword" className="m-4">Verify Password</label>
              </div>
              <div class="col">
                <input id="repeatPassword" className="m-4" type="password" placeholder="Enter Password Again" required></input>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                <label for="displayName" className="m-4">Display Name</label>
              </div>
              <div class="col">
                <input id="displayName" className="m-4" type="text" placeholder="Enter Nickname" required></input>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="profilePic" className="m-4">Profile Picture</label>
              </div>
              <div class="col">
                <input id="profilePic" className="m-4" type="file" onChange={fileUpload} required></input>
              </div>
              <div class="col">
                <img id="profilePicImg" src={file}></img>
              </div>
            </div>
            <br></br>
            <span> Already signed-up?</span> <a href='/'>click here</a> <span> to log-in!</span>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-danger">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;