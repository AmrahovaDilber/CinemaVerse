import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-1 bg-[#0b0b0b]  flex-col ">{children}</main>
      <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default AppLayout;
