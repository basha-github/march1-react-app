import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import Laptop from "./components/Laptop";
import Tvs from "./components/Tvs";
import WashingMachines from "./components/WashingMachines";
import DashBoard from "./components/DashBoard";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<DashBoard />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/tvs" element={<Tvs />} />
        <Route path="/wash" element={<WashingMachines />} />
       
         
         </Routes>
      </BrowserRouter>
    </div>
  );
}
