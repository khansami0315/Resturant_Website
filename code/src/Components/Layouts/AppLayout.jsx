import { Outlet } from "react-router-dom"
import { Footer } from "../../Ul/Footer"
import { Header } from "../../Ul/Header"

export const AppLayout  = () => {



    return  (

        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
     
}