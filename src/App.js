import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import Investor from "./Screens/Investor";
import Startup from "./Screens/Startup";
import StartupDetails from "./Screens/StartupDetails";
import Client from "./Screens/Client";
import FAQ from "./Screens/FAQ";
import Contact from "./Screens/Contact";
import Milestones from "./Screens/Milestones";

function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />}>
          <Route path="" element={<Dashboard />} />
          <Route path="investor" element={<Investor />} />
          <Route path="startup" element={<Startup />} />
          <Route path="startup-details" element={<StartupDetails />} />
          <Route path="client" element={<Client />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="milestones" element={<Milestones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
