


import React from "react";
import classes from "./page.module.css";
import DashBoardPetStatus from "@/app/components/dashBoard/dashBoardPetStatus";
import DashBoardPetInfo from "@/app/components/dashBoard/dashBoardPetInfo";


export default function DashBoardHome() {

    return (
        <>
            <div className={classes.dashBoardContentWrapper}>
                <DashBoardPetInfo></DashBoardPetInfo>
                <DashBoardPetStatus></DashBoardPetStatus>
            </div>
        </>
    )
};