import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const NavBarWrapper = styled.div`
    min-width: 1080px;
    height: 80px;
    width: 100vw;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    .navbar-container{
        min-width: 930px;
        width: 100vw;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .title-container{
        min-width: 140px;
        max-width: 140px;
        width: 140px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-left: 20px;
    }
    .title-container > h1{
        margin:0;
        color: #2E556A;
    }
    .title-container > img {
        width: 47px;
        height: 32px;
        background-color: #ffffff;
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
        min-width: 220px;
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
    .manu-container{
        min-width: 410px;
        height: 45px;
        display: flex;
        align-items: center;
    }
    .manu-container > ul {
        display: flex;
        margin: 0;
    }
    .manu-container > ul > li {
        margin: 0px 15px;
        font-weight: 800;
        color: #474747;
        list-style-type: none;
        cursor: pointer;
    }
    .user-container{
        height: 45px;
        display: flex;
        align-items: center;
    }
    .sign-in-button{
        margin: 10px;
        display: block;
        position: relative;
        float: left;
        height: 30px;
        width: 85px;
        padding: 0;
        margin: 10px 20px 10px 0;
        font-weight: 600;
        text-align: center;
        border: 0px;
        line-height: 22px;
        color: #ffffff;
        border-radius: 5px;
        transition: all 0.2s ;
        background-color: #0BCF4E;
        cursor: pointer;
        &:hover{
            background-color: #97c9a7;
        }
    }
    .log-in-button {
        margin: 10px;
        display: block;
        position: relative;
        float: left;
        height: 30px;
        width: 85px;
        padding: 0;
        margin: 10px 20px 10px 0;
        font-weight: 600;
        text-align: center;
        border: 0px;
        line-height: 22px;
        color: #ffffff;
        border-radius: 5px;
        transition: all 0.2s ;
        background-color: #548EAD;
        cursor: pointer;
        &:hover{
            background-color: #7399ac;
        }
    }
`;

const LinkStyle = {
    textDecoration: "none",
    color: "#474747"
}
const LinkBtnStyle = {
    textDecoration: "none",
    color: "#ffffff"
}




export const NavBar = () => {



    return (
        <NavBarWrapper>
                <div className="title-container">
                        <img src="/img/logo.png" alt="logo"></img>
                        <h1>PET24</h1>
                </div>
                <div className="navbar-container">
                    <div className="search-container">
                        <input placeholder="Search"></input>
                        <img src="" alt="search-icon"></img>
                        <button className="search-btn">검색</button>
                    </div>
                    <div className="manu-container">
                        <ul>
                            <li><Link to={"/"} style={LinkStyle}>Home</Link></li>
                            <li><Link to={"/hospital"} style={LinkStyle}>Animal Hospital</Link></li>
                            <li><Link to={"/blogs"} style={LinkStyle}>Blog</Link></li>
                            <li><Link to={"/about"} style={LinkStyle}>About</Link></li>
                        </ul>
                    </div>
                    <div className="user-container">
                    <Link to={"/login"} style={LinkBtnStyle}><button className="log-in-button">Log in</button></Link>
                    <Link to={"/signin"} style={LinkBtnStyle}><button className="sign-in-button">Sign in</button></Link>
                    </div>
                </div>
        </NavBarWrapper>
    )
};