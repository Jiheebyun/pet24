
"use client"
import React, { useState } from "react";
import Image from "next/image";


import classes from "./page.module.css";



type Options = {
    VetName: string,
    Status: string,
    DiagnosisData: string,
};

export default function Records(){
    const [ options, setOptions ] = useState<Options>({
        VetName: 'Vet Name',
        Status: '',
        DiagnosisData: '', 
    });


    const deleteHandler = () =>{
        console.log("삭제")
        //모달창으로 다시한번 물어봐야함
    };

    return(
        <>
            <div className={classes.recordsWrapper}>
                <div className={classes.recordsTitleWrapper}>
                    <div className={classes.recordsTitleContainer}>
                        <div className={classes.recordsTitle}>
                            <h2>Records</h2>
                            <h3>88</h3>
                        </div>
                        
                        <div className={classes.recordsDeleteContainer} onClick={deleteHandler}>
                            <Image src={"/img/dashBoardNavBarIcons/DeleteIcon.png"} width={20} height={20} alt="delete"></Image>
                        </div>
                    </div>
                    {/* <Image></Image> */}
                </div>
                <div>
                    <table className={classes.recordsTable} border={1}>
                        <tbody className={classes.recordsTableTbody}>
                            <tr className={classes.recordsTableHeaders}>
                                <th> </th>
                                <th>Image</th>
                                <th>Pet info</th>
                                <th>
                                    <div className={classes.recordsTableTitleHeader}>
                                        <span>Title</span>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.recordsTableVetNameHeader}>
                                        <select className={classes.recordsOptionsSelect} id="select">
                                            <option defaultValue={"VetName"}>Vet Names</option>
                                            <option value="name1">name1</option>
                                            <option value="name2">name2</option>
                                            <option value="name3">name3</option>
                                            <option value="name4">name4</option>
                                        </select>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.recordsTableVetNameHeader}>
                                            <select className={classes.recordsOptionsSelect}>
                                            <option defaultValue={"VetName"}>Status</option>
                                            <option value="name1">Holding</option>
                                            <option value="name2">Processing</option>
                                            <option value="name3">Waiting</option>
                                            <option value="name4">Completed</option>
                                        </select>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.recordsTableTitleHeader}>
                                        <span>Diagnosis Date</span>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.recordsTableTitleHeader}>
                                        <span>Options</span>
                                    </div>
                                </th>
                            </tr>
                            
                        
                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                                <td>두번째 칸</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={classes.paginationContainer}>
                        <Image 
                            src={"/img/dashBoardNavBarIcons/leftArrow.png"} 
                            width={15} 
                            height={20} 
                            alt="LeftPaginator"
                            style={{cursor:"pointer"}}
                        ></Image>

                        <button className={classes.paginationBtn}>1</button>
                        <button className={classes.paginationBtn}>2</button>
                        <button className={classes.paginationBtn}>3</button>
                        <button className={classes.paginationBtn}>4</button>

                        <Image 
                            src={"/img/dashBoardNavBarIcons/rightArrow.png"} 
                            width={15} 
                            height={20} 
                            alt="RightPaginator"
                            style={{cursor:"pointer"}}
                        ></Image>

                    </div>

                </div>

            </div>
        </>
    )
}