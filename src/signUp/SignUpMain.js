import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";
import { validateUsername, validatePassword, validateRepeatedPassword, validateNickname } from "./Validation";
import {users} from "../Users";
import $ from "jquery";

function SignUp() {
  
  const [file, setFile] = useState();

  function fileUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function removePicture(e) {
    setFile();
  }

  const name = useRef("");
  const pass = useRef("");
  const rePass = useRef("");
  const nick = useRef("");
  const pic = useRef(null);


  $(document).ready(function () {
    $("#signUpForm").on("submit", function (event) {
      event.preventDefault();
      if (validateUsername(name.current.value) && validatePassword(pass.current.value, rePass.current.value)
        && validateRepeatedPassword(pass.current.value, rePass.current.value) && validateNickname(nick.current.value)) {
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

useEffect(() => {
    document.getElementById("SignUpUsername").addEventListener("keyup", function (event) { validateUsername(name.current.value); })
    document.getElementById("SignUpPassword").addEventListener("keyup", function (event) { validatePassword(pass.current.value, rePass.current.value); })
    document.getElementById("SignUpRePassword").addEventListener("keyup", function (event) { validateRepeatedPassword(pass.current.value, rePass.current.value); })
    document.getElementById("SignUpNickname").addEventListener("keyup", function (event) { validateNickname(nick.current.value); })
}, [])
  
  return (
    <SignUpForm name={name} pass={pass} rePass={rePass} nick={nick} pic={pic}
      file={file} fileUpload={fileUpload} removePicture={removePicture}></SignUpForm>
  );
}

export default SignUp;