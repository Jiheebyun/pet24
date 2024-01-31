


import React, { useState }from "react";
import classes from "./mapResultLists.module.css";


type Props = {
    resultData: any;
  }
  

export const MapResultLists : React.FC<Props> = ({resultData}) => {

    
    
    
    //map을 사용하여 결과를 보여줘야한다.
    return (
        <>
            {resultData && resultData.map((place: any, idx: number)=>{
                console.log(place)
                return (
                <div key={place.id} className={classes.mapResultWarpper}>
                    <div className={classes.mapSearchListsContainer}>
                            <img src={place.url}></img>
                    </div>
                    <div className={classes.mapDetailContainer}>
                        <span>{place.place_name}</span>
                        <span>{place.address_name}</span>
                        <span>{place.phone}</span>
                    </div>
                </div>
                )
            })}
        </>
    )
}