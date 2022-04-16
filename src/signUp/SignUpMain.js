import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";
import SignUpSuccess from "./SignUpSuccess";
import { validateUsername, validatePassword, validateRepeatedPassword, validateNickname } from "./Validation";
import { addNewUser } from "../UsersDB";
import $ from "jquery";

function SignUp() {
  const [file, setFile] = useState();
  function fileUpload(e) {

    setFile(URL.createObjectURL(e.target.files[0]));
    pic = e.target.files[0];
  }
  function removePicture(e) {
    setFile();
  }

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };


  const name = useRef("");
  const pass = useRef("");
  const rePass = useRef("");
  const nick = useRef("");
  var pic = null;


  $(document).ready(function () {
    $("#signUpForm").on("submit", function (event) {
      event.preventDefault();
      if (name.current.value && validateUsername(name.current.value) && pass.current.value && rePass.current.value
        && validatePassword(pass.current.value, rePass.current.value) && validateRepeatedPassword(pass.current.value, rePass.current.value)
        && validateNickname(nick.current.value)) {
        addNewUser(name.current.value, pass.current.value, nick.current.value, pic);
        showModal();
      }
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
    <div>
      <SignUpSuccess isOpen={isOpen} hideModal={hideModal} nick={nick.current.value}></SignUpSuccess>
      <SignUpForm name={name} pass={pass} rePass={rePass} nick={nick}
        file={file} fileUpload={fileUpload} removePicture={removePicture}></SignUpForm>
    </div>
  );
}

export default SignUp;