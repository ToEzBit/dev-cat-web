import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Reviews from '../components/Review.jsx/Review';
import ChatRoom from '../pages/ChatRoom';
import HomePage from '../pages/HomePage';
import DevProfilePage from '../pages/DevProfilePage';
import ResultPage from '../pages/ResultPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import NewPasswordPage from '../pages/NewPasswordPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/chatroom" element={<ChatRoom />} />
      <Route path="/review" element={<Reviews />} />
      <Route path="/dev/profile/:id" element={<DevProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/changepassword" element={<ChangePasswordPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />
    </Routes>
  );
}
