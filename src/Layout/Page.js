import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { RepetitoryPage } from "../pages/RepetitoryPage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repetitory" element={<RepetitoryPage />} />
        </Routes>
        
    );
};

export default Page;
