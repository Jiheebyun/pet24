


import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";




export default function DashBoardAlert() {

    return (
        <>  
            <div className={classes.newAlertWrapper}>
                <h2> New Alerts</h2>
                <div className={classes.newAlertContainer}>
                    <Link href={'/'} style = {{ position: "absolute", right: "15px", top: "10px"}}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/cancelIcon.png"
                            alt="cancelIcon"
                            width={20}
                            height={20}
                            className={''}
                        ></Image>
                    </Link>

                    <span>abc</span>
                </div>

                <div className={classes.newAlertContainer}>
                    <Link href={'/'} style = {{ position: "absolute", right: "15px", top: "10px"}}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/cancelIcon.png"
                            alt="cancelIcon"
                            width={20}
                            height={20}
                            className={''}
                        ></Image>
                    </Link>
                    <span>abc</span>
                </div>

                <div className={classes.newAlertContainer}>
                    <Link href={'/'} style = {{ position: "absolute", right: "15px", top: "10px"}}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/cancelIcon.png"
                            alt="cancelIcon"
                            width={20}
                            height={20}
                            className={''}
                        ></Image>
                    </Link>
                    <span>abc</span>
                </div>

                <div className={classes.newAlertContainer}>
                    <Link href={'/'} style = {{ position: "absolute", right: "15px", top: "10px"}}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/cancelIcon.png"
                            alt="cancelIcon"
                            width={20}
                            height={20}
                            className={''}
                        ></Image>
                    </Link>
                    <span>abc</span>
                </div>

                <div className={classes.newAlertContainer}>
                    <Link href={'/'} style = {{ position: "absolute", right: "15px", top: "10px"}}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/cancelIcon.png"
                            alt="cancelIcon"
                            width={20}
                            height={20}
                            className={''}
                        ></Image>
                    </Link>
                    <span>abc</span>
                </div>
                
            </div>    
        </>
    )
};