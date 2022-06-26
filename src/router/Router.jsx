import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import DevProfilePage from '../pages/DevProfilePage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/dev/profile/:id" element={<DevProfilePage />} />
    </Routes>
  );
}
