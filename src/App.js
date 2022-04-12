import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './signUp/SignUpMain';

function App() {
  return (
    <div>
   <BrowserRouter>
       <Routes>
         <Route path = "/" element={<LogIn/>}>  </Route>
         <Route path = "/signup" element={<SignUp/>}>  </Route>
       </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;