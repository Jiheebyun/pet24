

import React from "react";
import Image from "next/image";

import classes from "./page.module.css";






export default function Record(){
    return(
        <>
            <div className={classes.recordsWrapper}>
                <div className={classes.recordsTitleWrapper}>
                    <div className={classes.recordsTitleContainer}>
                        <h2>Records</h2>
                        <h3>88</h3>
                    </div>
                    <Image></Image>
                </div>
                <div>

                </div>

            </div>
        </>
    )
}