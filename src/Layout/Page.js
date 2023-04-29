import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { RepetitoryPage } from "../pages/RepetitoryPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { BuyPage } from "../pages/BuyPage";
import { FilmPage } from "../pages/FilmPage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repetitory" element={<RepetitoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/film" element={<FilmPage />} />

        </Routes>
        
    );
};

export default Page;
