import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Reviews from '../components/review/Reviews';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import DevProfilePage from '../pages/DevProfilePage';
import ResultPage from '../pages/ResultPage';
import ProductPage from '../pages/ProductPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/review" element={<Reviews />} />
      <Route path="/dev/profile/:id" element={<DevProfilePage />} />
    </Routes>
  );
}
