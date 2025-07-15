import { Outlet } from "react-router-dom";
import Faq from "./faq";
import CustomNavbar from "./navbar";

export default function Layout(){
    return(
        <>
        <CustomNavbar/>
           <main className="min-h-screen ">
        <Outlet />
        
        <Faq />

      </main>
        </>
    )
}