import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from './LogIn';
import Chat from "./Chat";
import SignUp from './SignUp';

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