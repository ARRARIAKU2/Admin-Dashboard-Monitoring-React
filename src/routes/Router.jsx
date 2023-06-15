import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Audit from "../pages/Audit";
import Users from "../pages/Users";
import AddUsers from "../pages/AddUsers";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" index element={<Home/>} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/audit" element={<Audit />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/add" element={<AddUsers />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
