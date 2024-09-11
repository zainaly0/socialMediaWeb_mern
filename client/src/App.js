import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage/Index";
import ProfilePage from "./scenes/profilePage";
import Navbar from "./scenes/navBar";
import LoginPage from "./scenes/loginPage";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
