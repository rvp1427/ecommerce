import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="section w-full">
      <div className="grid-style">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
