import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import ResultPage from '../pages/ResultPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
    </Routes>
  );
}
