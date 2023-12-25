import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";




const LoginStyle = styled.div`
    min-width: 1080px;
    width: 100vw;
    min-height: 100vh;
    background-color: #d2a5a5;
    display: flex;

    .login-container{
        width: 35%;
        min-height: 100vh;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .login-userimage-wrapper{
        width: 65%;
        height: 100vh;
        min-height: 100vh;
        background-color: #dbdbdb;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .login-logo-wrapper{
        height: 250px;
        background-color: #FFFFFF;
        margin-top: 80px;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }
    .login-logo-wrapper > img{
        height: 200px;
        width: 200px;
        object-fit: contain;
    }
    .login-logo-wrapper > span {
        font-weight: 700;
    }
    .login-info-wrapper{
        display: flex;
        flex-direction: column;
    }
    .login-info-wrapper > span {
        color: #555555;
        margin-top: 20px;
        margin: 20px auto auto 0;
    
    }
    .login-info-wrapper > input {
        height: 40px;
        width: 30vw;
        min-width: 350px;
        background-color: #F1F3F6;
        border: 0;
        margin-top: 5px;
    }

    .user-image-container{
        height: 500px;
        width: 700px;
        background-color: #555555;
        text-align: center;
    }
    .user-image-container > img{
        height: 500px;
        width: 700px;
    }
    .forgotpassword {
        margin: 5px 0 0 300px;
        font-size: 14px;
        color: #7a7a7a;
        text-decoration: "none";
        text-decoration-line: none;
        cursor: pointer;
        &:hover {
            color: #71adcb;
        }
    }
    .login-btn{
        height: 40px;
        width: 31vw;
        min-width: 355px;
        max-width: 470px;
        padding: 0;
        font-weight: 600;
        text-align: center;
        border: 0px;
        line-height: 22px;
        margin-top: 30px;
        color: #ffffff;
        border-radius: 5px;
        background-color: #548EAD;
        cursor: pointer;
        &:hover{
            background-color: #7399ac;
        }
    }
    .login-line{
        position: absolute; 
        width: 40px;
        height: 1px;
        border-top: 3px solid black;
        margin-top: 30px;

    }

    .google-login-wrapper{
        height: 70px;
        background-color: #71adcb;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        margin-top: 30px;
        border: solid 1 1 1 1 #7399ac;
    }
    .google-login-wrapper > img {
        height: 48px;
        width: 48px;
        cursor: pointer;
    }
`




export const Login = () => {
    return (
        <>
            <LoginStyle>
                <div className="login-container">
                    <div>
                        <button>back</button>
                    </div>
                    <div className="login-logo-wrapper">
                        <Link to={"/"}><img src="/img/logo.png" alt="login-logo"></img></Link>
                        <span>Login into your account</span>
                    </div>
                    <div className="login-info-wrapper">
                        <span>Email address</span>
                        <input type="text" placeholder="alex@email.com"></input>
                        <span >Password</span>
                        <input type="password" placeholder="Enter your password"></input>
                    </div>
                    <span className="forgotpassword"><Link to={''}>Forgot password?</Link></span>
                    <button className="login-btn">Login Now</button>
                    <div className="google-login-wrapper">
                        <img src="/img/googleLogo.png" alt="google-logo"></img>
                    </div>

                </div>
                <div className="login-userimage-wrapper">
                    <div className="user-image-container">
                        <img src="/img/userImage.png" alt="user"></img>
                    </div>

                </div>
            </LoginStyle>
        </>
    )
};