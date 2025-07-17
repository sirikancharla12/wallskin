import { Outlet } from "react-router-dom";
import Faq from "./faq";
import CustomNavbar from "./navbar";
import OurClients from "./clients";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Layout(){
    return(
        <>
        <CustomNavbar/>
           <main className="mt-20">
        <Outlet />
        
        <Faq />
        <OurClients/>
        <Testimonials/>
        <Footer/> 

      </main>
        </>
    )
}