import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";
import $ from "jquery";

function SignUp() {
  const [file, setFile] = useState();

  function fileUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function removePicture(e) {
    setFile();
  }

  var users = [{ username: "admin", password: "a123" }]  

  function validateSpaces(str, id, errorHtml){
    if (/\s/.test(str)) {
      document.getElementById(id).innerHTML = errorHtml;
      return false;
    }
    return true;
  }

  function validateLength(str, len, id, errorHtml){
    if (str.length < len) {
      document.getElementById(id).innerHTML = errorHtml;
      return false;
    }
    return true;
  }

  $(function () {
    $("#signUpForm").on("submit", function (event) {
      var name = $('#SignUpUsername').val();

      if (!(validateSpaces(name, "userMessage", "Username must be one word!"))) {
        return false;
      }

      if (!(validateLength(name, 2, "userMessage", "Username must contain at least two characters!"))) {
        return false;
      }

      var pass = $('#SignUpPassword').val();

      if (!(validateSpaces(pass, "userMessage", "Password must be one word!"))) {
        return false;
      }

      if (!(validateLength(pass, 2, "userMessage", "Password must contain at least two characters!"))) {
        return false;
      }

      if (!(/\d/.test(pass) && /[a-zA-Z]/.test(pass))) {
        document.getElementById("userMessage").innerHTML = "Password must contain at least one number one letter characters!";
        return false;
      }

      var rePass = $('#SignUpRePassword').val();

      if (pass != rePass) {
        document.getElementById("userMessage").innerHTML = "Passwords doesn't match. Please try again.";
        return false;
      }

      var nick = $('#SignUpNickname').val();

      if (!(validateLength(nick, 2, "userMessage", "Nickname must contain at least two characters!"))) {
        return false;
      }

      document.getElementById("userMessage").innerHTML = "";
      // document.getElementById("u").innerHTML = name;
      // document.getElementById("p").innerHTML = pass;
      // document.getElementById("rp").innerHTML = rePass;
      // document.getElementById("n").innerHTML = nick;


      var pic = $('#SignUpProfilePic').val();

      users.push(
        {
          username: name,
          password: pass,
          nickname: nick,
          picture: pic
        }
      );

      console.log(users);

      return false;
    });
  });

  return (
    <section className="vh-60">
      <div className="container py-5 h-60">
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <h6>Please Fill Your Info!</h6>

                  <br></br>

                  <form id="signUpForm">
                  <div className="form-floating form-white text-dark mb-4">
                    <input id="SignUpUsername" type="text" placeholder="Enter Username" className="form-control" autoFocus />
                    <label htmlFor="SignUpUsername" className="form-label">Username</label>
                  </div>

                  <div className="form-floating form-white text-dark mb-4">
                    <input id="SignUpPassword" type="password" placeholder="Enter Password" className="form-control"/>
                    <label htmlFor="SignUpPassword" className="form-label">Password</label>
                  </div>

                  <div className="form-floating form-white text-dark mb-4">
                    <input id="SignUpRePassword" type="password" placeholder="Re-Enter Password" className="form-control"/>
                    <label htmlFor="SignUpRePassword" className="form-label">Verify Password</label>
                  </div>

                  <div className="form-floating form-white text-dark mb-4">
                    <input id="SignUpNickname" type="text" placeholder="Enter Nickname" className="form-control"/>
                    <label htmlFor="SignUpNickname" className="form-label">Nickname</label>
                  </div>

                    <div class="mb-3">

                    {!file && (
                      <div>
                        <input id="SignUpProfilePic" class="form-control" type="file" onChange={fileUpload}></input>
                        <label htmlFor="SignUpProfilePic" >Profile Picture</label>
                      </div>
                    )}


                      {file && (
                        <div id="ProfilePicHolder">
                          <img id="SignUpProfilePicImg" src={file}></img>
                          <button id="closeBtn" class="btn btn-danger btn-circle btn-sm" onClick={removePicture}>X</button>
                        </div>
                      )}
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" >Sign-Up</button>
                  </form>
                  <br></br>

                  <p id="userMessage" class="text-danger fw-bold"></p>
                    
                  {/* <p id="u"></p>
                  <p id="p"></p>
                  <p id="rp"></p>
                  <p id="n"></p> */}

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