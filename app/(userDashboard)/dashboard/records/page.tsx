

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
                    {/* <Image></Image> */}
                </div>
                <div>
                    <table className={classes.recordsTable} border={1}>
                        <th>Select</th>
                        <th>Image</th>
                        <th>Pet info</th>
                        <th>Title</th>
                        <th>Vet Name</th>
                        <th>Status</th>
                        <th>Diagnosis Date</th>
                        <th>Options</th>
                        <tr>
                            <td>첫번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                        </tr>

                        <tr>
                            <td>첫번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                            <td>두번째 칸</td>
                        </tr>
                    </table>


                </div>

            </div>
        </>
    )
}