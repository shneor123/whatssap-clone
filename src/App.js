import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Chat } from './cmps/Chat';
import { SideBar } from './cmps/SideBar';
import { Login } from './cmps/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SideBar />} path={"/rooms"} />
        <Route element={<Chat />} path={"/rooms/:roomId"} />
        <Route element={<Login />} path={"/login"} />

      </Routes>
    </Router>
  )
}

export default App
