"use client"
import Image from "next/image";
import Link from "next/link";
import classes from "./navBar.module.css"
import { useSelectedLayoutSegments } from "next/navigation";


export default function NavBar(){

    const segment: string[] | null[] = useSelectedLayoutSegments();

    return (
        <>
            <div className={classes.navBarWrapper}>
            <Link href="/" className={classes.LinkStyle} >
            <div className={classes.titleContainer}>
                <Image 
                    src="/img/logo.png" 
                    alt="logo"
                    width={47}
                    height={32}
                ></Image>
                <h1>PET24</h1>
            </div>
            </Link>
            <div className={classes.navbarContainer}>
            <div className={classes.searchContainer}>
                <input placeholder="Search Hospital"></input>
                <div className={classes.searchContainerImg}>
                    <Image 
                        src="/img/search_icon.png" 
                        alt="search-icon" 
                        width={20}
                        height={20}
                    ></Image>
                </div>
                </div>
                <div className={classes.menuContainer}>
                    <ul>
                    <li><Link 
                            href={"/"} 
                            className={segment.length === 0 ? classes.currentLinkStyle: classes.LinkStyle}
                        >Home</Link></li>
                    <li><Link 
                            href={"/animalhospitals"} 
                            className={segment[0] === "animalhospitals" ? classes.currentLinkStyle: classes.LinkStyle}
                        >Animal Hospitals</Link></li>
                    <li><Link 
                            href={"/blogs"} 
                            className={segment[0] === "blogs" ? classes.currentLinkStyle: classes.LinkStyle}
                        >Blogs</Link></li>
                    <li><Link 
                            href={"/about"} 
                            className={segment[0] === "about" ? classes.currentLinkStyle: classes.LinkStyle}
                        >About</Link></li>
                    </ul>
                </div>
                <div className={classes.userContainer}>
                    <Link href={"/login"} className={classes.LinkBtnStyle}><button className={classes.logInButton}>Log in</button></Link>
                    <Link href={"/signin"} className={classes.LinkBtnStyle}><button className={classes.signInbButton}>Sign in</button></Link>
                </div>
            </div>
        </div>
      </>
    )
}