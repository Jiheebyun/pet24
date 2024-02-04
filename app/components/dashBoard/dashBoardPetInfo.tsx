

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
                        <div className={classes.petInfoDetailTotalContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Total Record</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span>abc Hospital Diagnosis</span>
                            </div>
                        </div>


                        <div className={classes.petInfoDetailRecentContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Recent Record</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span></span>
                            </div>
                        </div>

                        <div className={classes.petInfoDetailFeedBackContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Vet FeedBack</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------- */}
                <div className={classes.petInfoWrapper}>
                    <div className={classes.petInfoNameContainer}>
                        <h2 className={classes.petInfoNameContainerH2}>Pet Name: </h2>
                        <span className={classes.petInfoNameContainerSpan}> BORI</span>
                    </div>

                    <div className={classes.petInfoContainer}>
                        <div className={classes.petInfoDetailTotalContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Total Record</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span>abc Hospital Diagnosis</span>
                            </div>
                        </div>


                        <div className={classes.petInfoDetailRecentContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Recent Record</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span></span>
                            </div>
                        </div>

                        <div className={classes.petInfoDetailFeedBackContainer}>
                            <div className={classes.petInfoRecordTitleContainer}>
                                <h3>Vet FeedBack</h3>
                            </div>

                            <div className={classes.petInfoTotalQtyContainer}>
                                <span>00</span>
                            </div>

                            <div className={classes.petInfoHospitalContainer}>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}