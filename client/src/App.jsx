import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Register />
      <Footer />
    </>
  );
}

export default App;
