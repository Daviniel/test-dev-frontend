import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Wallet from "../pages/Wallet";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/carteira" element={<Wallet/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
}