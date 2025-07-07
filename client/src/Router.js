import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homePage";
import MagicMerchPage from "./pages/MagicalMerch";
import Login from "./components/loginPage";
import Layout from "./components/layout/layout";
import FamiliarsPage from "./components/familiarPage";
import "./App.css";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="magic-merch" element={<MagicMerchPage />} />
          <Route path="familiars" element={<FamiliarsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div style={{ color: "white" }}>404 - You have fallen into the abyss fool</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
