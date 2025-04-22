// import { Outlet } from "react-router-dom"
// import { Footer } from "../../Ul/Footer"
// import { Header } from "../../Ul/Header"

//  export const  AppLayout  = () => {



//     return  (

//         <>
//          <Header/>
//          <Outlet/>
//          <Footer/>
//         </>
//     )
//     //  
// }
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Ul/Footer";
import { Header } from "../../Ul/Header";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
