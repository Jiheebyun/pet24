
import '../../../app/globals.css';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from './dashBoardNavBar.module.css';


export default function DashBoardNavBar() {
    return (
        <>
            <div className={classes.dashboardNavBarWrapper}>
                <div className={classes.logoNavBarImgContainer}>
                        <Image 
                            src="/img/logo.png" 
                            alt="logo"
                            width={100}
                            height={80}
                            className={classes.logoImg}
                        >
                        </Image>
                </div>


                <div className={classes.navBarManuWrapper}>
                    <div className={classes.navBarManuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarHome.png" 
                                alt="home"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarManuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarNotifications.png" 
                                alt="logo"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarManuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarCalendar.png" 
                                alt="logo"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarManuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarVector.png" 
                                alt="logo"
                                width={35}
                                height={35}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarManuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarPerson.png" 
                                alt="logo"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                </div>


                <div className={classes.settingConatiner}>
                    <Link href={'/'}>
                        <Image 
                            src="/img/dashBoardNavBarIcons/dashBoardNavBarSetting.png" 
                            alt="logo"
                            width={40}
                            height={40}
                        ></Image>
                    </Link>
                </div>
 
            </div>
        </>
    )
};