import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1218] text-slate-200">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0f1218] border-b border-slate-800">
        <NavBar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default MainLayout;