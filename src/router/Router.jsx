import React from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';

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
import EditProfilePage from '../pages/EditProfilePage';
import CreateProductPage from '../pages/CreateProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import CreateOrder from '../components/chat/deal/CreateOrder';
import Quotation from '../components/chat/deal/Quotation';
import Jodit from '../pages/Jodit';
import Step1 from '../components/step/Step1';
import Step2 from '../components/step/Step2';
import Step3 from '../components/step/Step3';
import Step4 from '../components/step/Step4';
import Step5 from '../components/step/Step5';
import UpdateOrder from '../components/chat/deal/UpdateOrder';
import Confirmation from '../components/chat/deal/Confirmation';
export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/result/:filterMethod" element={<ResultPage />} />

      <Route path="/create-product" element={<CreateProductPage />}>
        <Route path="1" element={<Step1 />} />
        <Route path="2" element={<Step2 />} />
        <Route path="3" element={<Step3 />} />
        <Route path="4" element={<Step4 />} />
        <Route path="5" element={<Step5 />} />
      </Route>
      <Route path="/chatroom/:roomId" element={<ChatRoom />} />
      <Route path="/chatroom/*" element={<ChatRoom />} />

      <Route path="/dev/profile/:id" element={<DevProfilePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/new-password" element={<NewPasswordPage />} />
      <Route path="/checkout-page/*" element={<CheckoutPage />} />
      <Route path="/profile" element={<EditProfilePage />} />
      <Route path="/test-create-order" element={<Confirmation />} />
      <Route path="/test-update-order" element={<UpdateOrder />} />
      <Route path="/test-update-order" element={<Quotation />} />
      <Route path="/jodit" element={<Jodit />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
