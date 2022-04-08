import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import LogIn from "./LogIn";
import "./SignUp.css";

function SignUp() {
  const [file, setFile] = useState();

  function fileUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function removePicture(e) {
    setFile();
  }


  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <h6>Please Fill Your Info!</h6>

                  <br></br>

                  <div className="form-outline form-white mb-3">
                    <input id="SignUpUsername" type="text" placeholder="Enter Username" className="form-control form-control-lg" required autoFocus />
                    <label for="SignUpUsername" className="form-label">Username</label>
                  </div>

                  <div className="form-outline form-white mb-3">
                    <input id="SignUpPassword" type="password" placeholder="Enter Password" className="form-control form-control-lg" required />
                    <label for="SignUpPassword" className="form-label">Password</label>
                  </div>

                  <div className="form-outline form-white mb-3">
                    <input id="SignUpRePassword" type="password" placeholder="Re-Enter Password" className="form-control form-control-lg" required />
                    <label for="SignUpRePassword" className="form-label">Verify Password</label>
                  </div>

                  <div className="form-outline form-white mb-3">
                    <input id="SignUpNickname" type="text" placeholder="Enter Nickname" className="form-control form-control-lg" required />
                    <label for="SignUpNickname" className="form-label">Nickname</label>
                  </div>

                  <div class="mb-3">

                    {!file && (
                      <div>
                        <input id="SignUpProfilePic" class="form-control" type="file" onChange={fileUpload}></input>
                        <label for="SignUpProfilePic" class="form-label" >Upload Profile Picture</label>
                      </div>
                    )}


                    {file && (
                      <div id="ProfilePicHolder">
                        <img id="SignUpProfilePicImg" src={file}></img>
                        <button class="btn btn-danger btn-circle btn-sm" onClick={removePicture}>X</button>
                      </div>
                    )}
                  </div>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign-Up</button>
                  
                </div>

                <div>
                    <span className="mb-0">Already Signed? &nbsp;</span>
                    <Link to="/" className="text-white-50 fw-bold">Log-In</Link>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;