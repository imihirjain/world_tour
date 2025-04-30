import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Headers } from "../UI/Headers";
const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
