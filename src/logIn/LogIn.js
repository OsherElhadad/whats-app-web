import { useState, useRef } from "react";
import {doesUserExist , getUserPassword} from "../UsersDB";
import LogInForm from "./LogInForm";
import $ from "jquery"
import LogInSuccess from "./LogInFailure";
import { useNavigate } from "react-router-dom";


function LogIn(props) {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  const name = useRef("");
  const pass = useRef("");

  let navigate = useNavigate();

  $(document).ready(function () {
    $("#logInForm").on("submit", function (event) {
      event.preventDefault();

      if (doesUserExist(name.current.value) && getUserPassword(name.current.value) == pass.current.value) {
          props.setUserName(name.current.value);
          navigate("/chat", { replace: true });
      } else {
        showModal();
      }
    });
  });

  return (
    <div>
      <LogInSuccess isOpen={isOpen} hideModal={hideModal}></LogInSuccess>
      <LogInForm name={name} pass={pass}></LogInForm>
    </div>
  );
}

export default LogIn;