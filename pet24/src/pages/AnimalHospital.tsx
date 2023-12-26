import React from "react";
import styled from "styled-components";
import { MapResultLists } from "../components/AnimalHospital/MapResultLists";
import { KakaoMap } from "../components/AnimalHospital/KakaoMap";



const HospitalStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;

    .map-search-wrapper {
        width: 30vw;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .map-search-container > h2{
        margin: 0;
        color: #474747;
    }
    .map-result-warpper{
        width: 95%;
        height: 90px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff;
        border: solid 0.5px #E5E5E5;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.23);
        
    }
    .map-search-lists-container{
        width: 65px;
        height: 65px;
        background-color: #caa2a2;

    }
    .map-wrapper{
        width: 70vw;
        height: 100vw;
        background-color: #caa2a2;
    }
    .search-container{
        min-width: 250px;
        max-width: 400px;
        width: 350px;
        position: relative;
        height: 45px;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .search-container > input {
        position: absolute;
        min-width: 260px;
        max-width: 300px;
        height: 30px;
        width: 20vw;
        padding: 0;
        border: none;
        border-radius: 5px;
        background-color: #e2e2e2;
        /* focus outline: 2px solid #2E556A; */
    }
    .search-container > img {

    }
    .search-btn {
        position: absolute;
        right: 7px;
        height: 30px;
        background-color: #e2e2e2;
        border-radius: 5px;
    }
    .map-search-option-container {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .container {
            min-width: 40px;
            display: block;
            position: relative;
            margin: 5px 10px 10px 10px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        span{
            font-size: 15px;
            font-weight: 400;
            color: #808080;
        }
    }
    .map-result-list{
        margin: 5px;
        background-color: #ffffff;
    }
    .map-detail-container{
        display: flex;
        flex-direction: column;
    }
`


export const AnimalHospital = () => {
    return (
        <HospitalStyle>
            <div className="map-search-wrapper">
                <div className="map-search-container">
                    <h2>Animal Hospital</h2>
                    <div className="search-container">
                        <input placeholder="Search"></input>
                        <img src="" alt="search-icon"></img>
                        <button className="search-btn">검색</button>
                    </div>
                </div>
                <div className="map-search-option-container">
                    <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark">One</span>
                    </label>

                    <label className="container">
                        <input type="checkbox"/>
                        <span className="checkmark">Two</span>
                    </label>

                    <label className="container">
                        <input type="checkbox"/>
                        <span className="checkmark">Three</span>
                    </label>

                    <label className="container">
                        <input type="checkbox"/>
                        <span className="checkmark">Four</span>
                    </label>
                </div>
                <MapResultLists/>
                <MapResultLists/>
                <MapResultLists/>
                <MapResultLists/>
                <MapResultLists/>
                <MapResultLists/>
                <MapResultLists/>
            </div>
            <div className="map-wrapper">
                <KakaoMap></KakaoMap>
            </div>

        </HospitalStyle>
    )
};