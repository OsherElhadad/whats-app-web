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
    
    const chagneUsername = (user)=> {
      setUsername(user);
    }

  return (
    <div>
   <BrowserRouter>
       <Routes>
         <Route path = "/" element={<LogIn setUserName={setUsername}/>}>  </Route>
         <Route path = "/signup"  element={<SignUp setUserName={chagneUsername}/>}>  </Route>
         <Route path = "/chat" element={<ChatPage user={username} setUsername={setUsername} />}>  </Route>
       </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;