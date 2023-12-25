import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";




export const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet> 
            {/*Outlet: Route에서 중첩라우팅을 통해서 자식컴포넌트를 담아서 랜더링해준다 */}
        </>
    )
}