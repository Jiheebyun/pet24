

import React from "react";
import classes from "./dashBoardPetInfo.module.css";


export default function DashBoardPetInfo (){
    return(
        <>
             <div className={classes.petsInfoWrapper}>
                <div className={classes.petInfoWrapper}>
                    <div className={classes.petInfoNameContainer}>
                        <h2 className={classes.petInfoNameContainerH2}>Pet Name: </h2>
                        <span className={classes.petInfoNameContainerSpan}> BORI</span>
                    </div>

                    <div className={classes.petInfoContainer}>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                    </div>
                </div>

                <div className={classes.petInfoWrapper}>
                    <div className={classes.petInfoNameContainer}>
                        <h2 className={classes.petInfoNameContainerH2}>Pet Name: </h2>
                        <span className={classes.petInfoNameContainerSpan}> BORI</span>
                    </div>
                    
                    <div className={classes.petInfoContainer}>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                        <div className={classes.petInfoDetailContainer}>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}