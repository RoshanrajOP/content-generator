"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-100">
      {/* Sidebar */}
      <div className="hidden md:block md:w-64 fixed h-full bg-white shadow-sm">
        <SideNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 p-5">
        <Header />
        <div className="pt-5">{children}</div>
      </div>
    </div>
)};

export default Layout;
