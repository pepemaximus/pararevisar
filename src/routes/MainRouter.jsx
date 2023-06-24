import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Item from "../pages/Item";
import Navbar from "../components/NavBar/NavBar";

const MainRouter = () => {
    return (  
    <Router>
        <Navbar/>
        <Routes>
            <Route path ="/" element={<Home/>}/  >
            <Route path ="/Category/:categoryId" element={<Category/>}/>
            <Route path ="/Item/:itemId" element={<Item/>}/>
        </Routes>
    </Router>
    );
};

export default MainRouter;
