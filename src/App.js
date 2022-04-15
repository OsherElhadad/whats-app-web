import React, { useState , useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import LogIn from './logIn/LogIn';
import SignUp from './signUp/SignUpMain';
import ChatPage from "./chatPage/ChatPage";

function App() {
    const [username,setUsername] = useState("");

    useEffect(() => {
      function setUserName(props){
        setUserName(props);
      }
    },[])
    

  return (
    <div>
   <BrowserRouter>
       <Routes>
         <Route path = "/" element={<LogIn setUserName={setUsername}/>}>  </Route>
         <Route path = "/signup" element={<SignUp/>}>  </Route>
         <Route path = "/chat" element={<ChatPage user={username} />}>  </Route>
       </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;