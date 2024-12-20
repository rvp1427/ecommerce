import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="con">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
