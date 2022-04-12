import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import LogIn from './logIn/LogIn';
import SignUp from './signUp/SignUpMain';
import Chat from "./Chat";

function App() {
  return (
    <div>
   <BrowserRouter>
       <Routes>
         <Route path = "/" element={<LogIn/>}>  </Route>
         <Route path = "/signup" element={<SignUp/>}>  </Route>
         <Route path = "/chat" element={<Chat/>}>  </Route>
       </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;