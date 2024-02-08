import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
