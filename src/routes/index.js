import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
}