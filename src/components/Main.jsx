import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <>
      <Navigation />
      <h1>Welcome to Qalakriti</h1>
      <Outlet />
      <footer>
        <p>© 2025 Qalakriti</p>
      </footer>
    </>
  );
};

export default Main;
