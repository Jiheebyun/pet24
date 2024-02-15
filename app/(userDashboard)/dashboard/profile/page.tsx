
import React from "react"
import classes from "./page.module.css";
import Image from "next/image";



export default function Profile (){
    return(
        <>
        <div>
            <div className={classes.profileHeader}>
                <h2>Your Profile</h2>
                <div>
                    {/* <Image ></Image> */}
                </div>
            </div>
            <div className={classes.userInfoWrapper}>
                <div className={classes.inputInfoContainer}>
                    <div className={classes.inputContainer}>
                        <label>First Name</label>
                        <input type="text" ></input>
                    </div>
                    <div className={classes.inputContainer}>
                        <label>Last Name</label>
                        <input type="text"></input>
                    </div>
                </div>
                <div className={classes.inputInfoContainer}>
                    <div className={classes.inputContainer}>
                        <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div className={classes.inputContainer}>
                        <label>Contact Number</label>
                        <input type="text"></input>
                    </div >
                </div>


                <div className={classes.inputInfoContainer}>
                    <div className={classes.inputContainer}>
                        <label>Address</label>
                        <input type="text"></input>
                    </div>
                    <div className={classes.inputContainer}>
                        <label>City</label>
                        <input type="text"></input>

                    </div>

                </div>
                <div>
                    <div className={classes.inputContainer}>
                        <label>State</label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className={classes.inputInfoContainer}>
                    <div className={classes.inputContainer}>
                        <label>password</label>
                        <input type="text"></input>
                    </div>
                    <div className={classes.inputContainer}>
                        <label>Confirm password</label>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
            <div className={classes.profileBtnContainer}>
                <button  className={classes.profileBtnCancel} type="button">Cancel</button>
                <button className={classes.profileBtnSave} type="button">Save</button>
            </div>
        </div>

        </>
    )
}