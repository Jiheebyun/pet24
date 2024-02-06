
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

                {/* 왜 모듈로 css스타일을 넣으면 안들어갈까...? 왜인라인으로 넣어야 스타일이들어가니 */}
                <div className={classes.navBarmenuWrapper1} 
                    style={{
                        width: "100px",
                        height: "500px",
                        backgroundColor: "#FFC297",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <div className={classes.navBarmenuContainer}>
                        <Link href={'/dashboard'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarHome.png" 
                                alt="home"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarmenuContainer}>
                        <Link href={'/dashboard/newalert'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarNotifications.png" 
                                alt="logo"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarmenuContainer}>
                        <Link href={'/'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarCalendar.png" 
                                alt="logo"
                                width={40}
                                height={40}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarmenuContainer}>
                        <Link href={'/dashboard/records'}>
                            <Image 
                                src="/img/dashBoardNavBarIcons/dashBoardNavBarVector.png" 
                                alt="logo"
                                width={35}
                                height={35}
                            ></Image>
                        </Link>
                    </div>
                    <div className={classes.navBarmenuContainer}>
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