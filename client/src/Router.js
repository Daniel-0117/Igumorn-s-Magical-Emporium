import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homePage";
import MagicMerchPage from "./components/magicMerchPage";
import Layout from "./components/layout/layout"; // adjusted import path to match file casing
import "./App.css";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/magic-merch" element={<MagicMerchPage />} />
          <Route path="*" element={<div>404 - You have fallen into the abyss fool</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;