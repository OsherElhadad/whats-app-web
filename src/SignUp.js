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
      <form action="" id="sign-up-form" className="p-3 mb-2 bg-dark text-dark bg-opacity-75 border border-2 rounded border-danger mx-auto">
        <h1>Create Acount</h1>
        <div>
          <label for="username" className="m-2">Username</label>
          <input id="username" type="text" placeholder="Enter Username" autoFocus required></input>
        </div>
        <br></br>
        <div>
        <label for="password" className="m-2">Password</label>
        <input id="password" type="password" placeholder="Enter Password" required></input>
        </div>
        <br></br>
        <div>
        <label for="repeatPassword" className="m-2">Verify Password</label>
        <input id="repeatPassword" type="password" placeholder="Enter Password Again" required></input>
        </div>
        <br></br>
        <div>
        <label for="displayName" className="m-2">Display Name</label>
        <input id="displayName" type="text" placeholder="Enter Nickname" required></input>
        </div>
        <div>
        <label for="profilePic" className="m-2">Profile Picture</label>
        <input id="profilePic" type="file" onChange={fileUpload} required></input>
        <img id="profilePicImg" src={file} />
        </div>
        <br></br>
        <span> Already signed-up?</span> <a href='/'>click here</a> <span> to log-in!</span>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;