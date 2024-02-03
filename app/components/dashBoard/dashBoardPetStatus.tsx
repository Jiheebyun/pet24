

import React from "react";
import classes from './dashBoardPetStatus.module.css';




export default function DashBoardPetStatus (){
    return (
        <>
             <div className={classes.petStatusInfoWrapper}>
                <div className={classes.petStatusInfoWrapper}>
                    <div className={classes.petStatusInfoTitleContainer}>
                        <h2 className={classes.petStatusInfoTitleH2}>Your Request status </h2>
                        <span className={classes.petStatusInfoTitleH2Span}> </span>
                    </div>
                    
                    <div className={classes.petStatusInfoContainer}>
                        <div className={classes.petStatusInfoDetailContainer}>

                        </div>
                        <div className={classes.petStatusInfoDetailContainer}>

                        </div>
                        <div className={classes.petStatusInfoDetailContainer}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}