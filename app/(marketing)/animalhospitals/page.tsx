"use client"

import React, { useState, } from "react";{}
import classes from "./animalHospitals.module.css";
import { MapResultLists } from "@/app/components/animalHospitals/mapResultLists";
import { HospitalsKakaoMap } from "@/app/components/animalHospitals/hospitalsKakaoMap";





export default function AnimalHospitals(){
    const [ resultData, setResultData ]: any = useState();
    const [ isLoading, setIsLoading ]: any = useState(false);

    const setResultDataHandler: any = (data: any[]): void =>{
        setResultData(data);
    };

    return(
        <>
            <div className={classes.hospitalsWrapper}>
                <div className={classes.mapSearchWrapper}>
                    <div className={classes.searchWrapper}>
                        <h2 className={classes.mapSearchContainerH2}>Animal Hospital</h2>
                        <div className={classes.searchContainer}>
                            <input className={classes.searchContainerInput} placeholder="Search"></input>
                            <img className={classes.searchContainerImg} src="/img/search_icon.png" alt="search-icon"></img>
                        </div>
                    </div>
                    <div className={classes.mapSearchOptionContainer}>
                        <label className={classes.mapSearchOptionContainerLabel}>
                            <input className={""} type="checkbox" />
                            <span className={classes.mapSearchOptionContainerSpan}>One</span>
                        </label>

                        <label className={classes.mapSearchOptionContainerLabel}>
                            <input className={""} type="checkbox"/>
                            <span className={classes.mapSearchOptionContainerSpan}>Two</span>
                        </label>

                        <label className={classes.mapSearchOptionContainerLabel}>
                            <input className={""} type="checkbox"/>
                            <span className={classes.mapSearchOptionContainerSpan}>Three</span>
                        </label>

                        <label className={classes.mapSearchOptionContainerLabel}>
                            <input className={""} type="checkbox"/>
                            <span className={classes.mapSearchOptionContainerSpan}>Four</span>
                        </label>
                    </div>
                    <div className={classes.mapResultContainer}>
                        <MapResultLists resultData={resultData}/>                  
                    </div>
                </div>
                <div className={classes.mapWrapper}>
                    <div className="map-container">
                        <HospitalsKakaoMap
                            setResultDataHandler = {setResultDataHandler}
                            setIsLoading = {setIsLoading}
                        ></HospitalsKakaoMap>
                    </div>
                </div>
            </div>
        </>
    )
};