import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/home";
import PashaRewards from "../containers/pasharewards";
import HistoryLayout from "../containers/history";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rewards" element={<PashaRewards />}></Route>
      <Route path="/history" element={<HistoryLayout />}></Route>
      <Route path="/Pasha-Insurance" element={<Home />}></Route>
      <Route path="/*" element={<div>Error</div>}></Route>
    </Routes>
  );
};
export default RoutesApp;
