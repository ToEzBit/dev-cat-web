import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}
