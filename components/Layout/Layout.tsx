import React from "react";
import LargeWithLogoCentered from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <LargeWithLogoCentered />
    </div>
  );
}

export default Layout;
