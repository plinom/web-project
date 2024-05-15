import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { EnterCode } from "../pages/EnterCode";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Login } from "../pages/Login";
import { NewPassword } from "../pages/NewPassword";
import { NotFound } from "../pages/NotFound";
import Landing from "../pages/LandingPage";
import { App } from "../pages/NewLanding";
import Normal from "../pages/NormalLanding";
import Fetch from "../pages/Fetch";
import MyPage from "../pages/MyPage";
import { CalendarPage } from "../pages/CalendarPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/code" element={<EnterCode />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/severyn" element={<Normal />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};
