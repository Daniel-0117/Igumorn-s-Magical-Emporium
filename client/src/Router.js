import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homePage";
import MagicMerchPage from "./components/magicMerchPage";
import Login from "./components/loginPage";
import Layout from "./components/layout/layout"; // adjusted import path to match file casing
import "./App.css";
import FamiliarsPage from "./components/familiarPage";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/magic-merch" element={<MagicMerchPage />} />
          <Route path="/familiars" element={<FamiliarsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404 - You have fallen into the abyss fool</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;