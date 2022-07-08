import React from 'react';
import { createRoot } from "react-dom/client";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from './App';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import AuthPage from './pages/AuthPage/AuthPage';
import ContactUs from './pages/ContactUs/ContactUs';

import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);