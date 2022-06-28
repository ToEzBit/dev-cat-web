import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import CreateProducts from '../components/modal/CreateProducts';

import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/createproduct" element={<CreateProducts />} />
    </Routes>
  );
}
