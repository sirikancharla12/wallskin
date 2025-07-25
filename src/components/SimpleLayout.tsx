import { Outlet } from "react-router-dom";
import CustomNavbar from "./navbar";
import Footer from "./Footer";

export default function SimpleLayout() {
  return (
    <>
      <CustomNavbar />
      <main className="mt-20 mb-10">
        <Outlet />
      </main>
        <Footer />
 
    </>
  );
}
