import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
