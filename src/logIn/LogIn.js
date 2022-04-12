import { useState, useRef } from "react";
import {users} from "../Users";
import $ from "jquery";
import LogInForm from "./LogInForm";
import LogInSuccess from "./LogInFailure";

function LogIn() {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  const name = useRef("");
  const pass = useRef("");


  $(document).ready(function () {
    $("#logInForm").on("submit", function (event) {
      event.preventDefault();
      console.log(users);
      
      console.log(name);
      console.log(pass);

      if (users.some(user => user["username"] == name.current.value && user["password"] == pass.current.value)) {
        // TODO - go to chat
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