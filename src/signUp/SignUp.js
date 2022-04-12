import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
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

  var users = [{username: "admin", password: "a123", nickname: "The Admin"}];

  function validateSpaces(str, errorId, errorHtml, parentId) {
    if (/\s/.test(str)) {
      document.getElementById(errorId).innerHTML = errorHtml;
      document.getElementById(parentId).classList.remove('is-valid');
      document.getElementById(parentId).classList.add('is-invalid');
      return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
  }

  function validateLength(str, len, errorId, errorHtml, parentId) {
    if (str.length < len) {
      document.getElementById(errorId).innerHTML = errorHtml;
      document.getElementById(parentId).classList.remove('is-valid');
      document.getElementById(parentId).classList.add('is-invalid');
      return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
  }

  function validateNumberAndLetter(str, errorId, errorHtml, parentId) {
    if (!(/\d/.test(str) && /[a-zA-Z]/.test(str))) {
      document.getElementById(errorId).innerHTML = errorHtml;
      document.getElementById(parentId).classList.remove('is-valid');
      document.getElementById(parentId).classList.add('is-invalid');
      return false;
    }
    document.getElementById(parentId).classList.add('is-valid');
    document.getElementById(parentId).classList.remove('is-invalid');
    return true;
  }


  const name = useRef("");

  function validateUsername() {
    if ((!(validateSpaces(name.current.value, "usernameInvalidFeedback", "Username must be one word!", "SignUpUsername")))
      || (!(validateLength(name.current.value, 2, "usernameInvalidFeedback", "Username must contain at least two characters!", "SignUpUsername")))) {
      return false;
    }
    return true;
  }

  const pass = useRef("");

  function validatePassword() {
    validateRepeatedPassword();
    if ((!(validateSpaces(pass.current.value, "passwordInvalidFeedback", "Password must be one word!", "SignUpPassword")))
      || (!(validateLength(pass.current.value, 2, "passwordInvalidFeedback", "Password must contain at least two characters!", "SignUpPassword")))
      || (!(validateNumberAndLetter(pass.current.value, "passwordInvalidFeedback", "Password must contain a number and a letter!", "SignUpPassword")))) {
      return false;
    }
    return true;
  }

  const rePass = useRef("");

  function validateRepeatedPassword() {
    if (pass.current.value != rePass.current.value) {
      document.getElementById("rePasswordInvalidFeedback").innerHTML = "Passwords doesn't match. Please try again.";
      document.getElementById("SignUpRePassword").classList.add('is-invalid');
      document.getElementById("SignUpRePassword").classList.remove('is-valid');
      return false;
    }
    document.getElementById("SignUpRePassword").classList.remove('is-invalid');
    document.getElementById("SignUpRePassword").classList.add('is-valid');
    return true;
  }

  const nick = useRef("");

  function validateNickname() {
    if (!(validateLength(nick.current.value, 2, "nicknameInvalidFeedback", "Username must contain at least two characters!", "SignUpNickname"))) {
      return false;
    }
    return true;
  }

  const pic = useRef(null);

  useEffect(() => {
    document.getElementById("SignUpUsername").addEventListener("keyup", function (event) { validateUsername(); })
    document.getElementById("SignUpPassword").addEventListener("keyup", function (event) { validatePassword(); })
    document.getElementById("SignUpRePassword").addEventListener("keyup", function (event) { validateRepeatedPassword(); })
    document.getElementById("SignUpNickname").addEventListener("keyup", function (event) { validateNickname(); })
  }, [])


  $(document).ready(function() {
    $("#signUpForm").on("submit", function (event) {
      event.preventDefault();
      if (validateUsername() && validatePassword() && validateRepeatedPassword() && validateNickname()) {
        users.push(
          {
            username: name.current.value,
            password: pass.current.value,
            nickname: nick.current.value,
            picture: pic.current.value
          }
        );
      }
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

                  <form id="signUpForm" noValidate>
                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={name} id="SignUpUsername" type="text" placeholder="Enter Username" className="form-control" autoFocus />
                      <label htmlFor="SignUpUsername" className="form-label">Username</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="usernameInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={pass} id="SignUpPassword" type="password" placeholder="Enter Password" className="form-control" />
                      <label htmlFor="SignUpPassword" className="form-label">Password</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="passwordInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={rePass} id="SignUpRePassword" type="password" placeholder="Re-Enter Password" className="form-control" />
                      <label htmlFor="SignUpRePassword" className="form-label">Verify Password</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="rePasswordInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={nick} id="SignUpNickname" type="text" placeholder="Enter Nickname" className="form-control" />
                      <label htmlFor="SignUpNickname" className="form-label">Nickname</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="nicknameInvalidFeedback" className="invalid-feedback">
                        Please choose a password.
                      </div>
                    </div>

                    <div className="mb-3">

                      {!file && (
                        <div>
                          <input ref={pic} id="SignUpProfilePic" className="form-control" type="file" onChange={fileUpload}></input>
                          <label htmlFor="SignUpProfilePic" >Profile Picture</label>
                        </div>
                      )}


                      {file && (
                        <div id="ProfilePicHolder">
                          <img id="SignUpProfilePicImg" src={file}></img>
                          <button id="closeBtn" className="btn btn-danger btn-circle btn-sm" onClick={removePicture}>X</button>
                        </div>
                      )}
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign-Up</button>
                  </form>
                  <br></br>

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