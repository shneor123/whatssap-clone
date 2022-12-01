import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Chat } from './cmps/Chat';
import { SideBar } from './cmps/SideBar';
import { Login } from './cmps/Login';

function App() {
  const user = useSelector(state => state.userModule.user)
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/rooms')
    } else {
      navigate('/login')
    }
  }, [user])

  return (
    <div className='app'>
      <div className='background-green'> </div>
      {user ?
        <Routes>
          <Route path="/rooms" element={<SideBar />} >
            <Route path=":roomId" element={<Chat />} />
          </Route >
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      }
    </div>
  )
}

export default App;