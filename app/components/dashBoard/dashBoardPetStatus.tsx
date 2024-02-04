
"use client"
import React, { useState } from "react";
import classes from './dashBoardPetStatus.module.css';




export default function DashBoardPetStatus (){
    const [requestData, setRequestData ] = useState([]);  
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
                            <div className={classes.StatusPetNameContainer}>
                                <h4>Request Status</h4>
                                <h4> Pet Name: Bori</h4>
                            </div>

                            <div className={classes.StatusPetProgressBarContainer}>
                                <span> in progress </span>
                                <div className={classes.StatusProgressBar}>
                                    <div className={classes.ProgressBarWithPersent}></div>
                                </div>
                                
                            </div>

                            <div className={classes.StatusEstDateContainer}>
                                <span>Estimated processing</span>
                                <span>0-3 Business days</span>
                            </div>
                            <div className={classes.StatusViewBtnContainer}>
                                <button className={classes.StatusViewBtn} type="button"> View Status</button>
                            </div>
                        </div>



                        <div className={classes.petStatusInfoDetailContainer}>
                            No data
                        </div>

                        <div className={classes.petStatusInfoDetailContainer}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}