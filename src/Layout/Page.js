import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { RepetitoryPage } from "../pages/RepetitoryPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repetitory" element={<RepetitoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
        
    );
};

export default Page;
