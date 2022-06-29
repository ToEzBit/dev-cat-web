import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Reviews from '../components/review/Reviews';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import DevProfilePage from '../pages/DevProfilePage';
import ResultPage from '../pages/ResultPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import NewPasswordPage from '../pages/NewPasswordPage';
import ProductPage from '../pages/ProductPage';
import Main from '../pages/chatdev/Main';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/review" element={<Reviews />} />
      <Route path="/dev/profile/:id" element={<DevProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/new-password" element={<NewPasswordPage />} />
      <Route path="/main-chatdev" element={<Main />} />
    </Routes>
  );
}
