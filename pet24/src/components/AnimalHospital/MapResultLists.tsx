import React, { useState }from "react";
import styled from "styled-components";



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
                <div key={place.id} className="map-result-warpper">
                    <div className="map-search-lists-container">
                            <img src={place.url}></img>
                    </div>
                    <div className="map-detail-container">
                        <span className="place-name">{place.place_name}</span>
                        <span>{place.address_name}</span>
                        <span>{place.phone}</span>
                    </div>
                </div>
                )
            })}
        </>
    )
}