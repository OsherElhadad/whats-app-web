import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";
import SignUpSuccess from "./SignUpSuccess";
import { validateUsername, validatePassword, validateRepeatedPassword, validateNickname, validatePic } from "./Validation";
import { addNewUser } from "../Users/UsersDB";
import { addUserWithEmptyChats } from "../Users/UsersChatDB";
import $ from "jquery";
import InvalidFileModal from "../InvalidFileModal";
import defalutProfilePic from "../Users/ProfilePictures/DefalutProfilePic.jpg"

function SignUp() {
  const [file, setFile] = useState();
  function fileUpload(e) {
    if (validatePic(e.target.files[0])) {
      setFile(URL.createObjectURL(e.target.files[0]));
      pic = e.target.files[0];
    } else {
      showInvalidPicModal();
    }
  }

  function removePicture(e) {
    setFile();
  }

  const [isInvalidFileModalOpen, setIsInvalidFileModalOpen] = useState(false);

  const showInvalidPicModal = () => {
    setIsInvalidFileModalOpen(true);
  };
  const hideInvalidPicModal = () => {
    setIsInvalidFileModalOpen(false);
  };



  const [isSignUpSuccesModalOpen, setIsSignUpSuccesModalOpen] = useState(false);
  const showSignUpSuccesModal = () => {
    setIsSignUpSuccesModalOpen(true);
  };
  const hideSignUpSuccesModal = () => {
    setIsSignUpSuccesModalOpen(false);
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
        if (!pic) {
          pic = defalutProfilePic;
          addNewUser(name.current.value, pass.current.value, nick.current.value, pic);
        } else {
          addNewUser(name.current.value, pass.current.value, nick.current.value, URL.createObjectURL(pic));
        }
        addUserWithEmptyChats(name.current.value);

        showSignUpSuccesModal();
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
      <InvalidFileModal isOpen={isInvalidFileModalOpen} hideModal={hideInvalidPicModal} text="Picture format must be one of the above: jpg/jpeg/png/svg"></InvalidFileModal>
      <SignUpSuccess isOpen={isSignUpSuccesModalOpen} hideModal={hideSignUpSuccesModal} nick={nick.current.value}></SignUpSuccess>
      <SignUpForm name={name} pass={pass} rePass={rePass} nick={nick}
        file={file} fileUpload={fileUpload} removePicture={removePicture}></SignUpForm>
    </div>
  );
}

export default SignUp;