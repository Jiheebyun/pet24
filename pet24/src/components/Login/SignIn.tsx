import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SignInStyle = styled.div`
    min-width: 1080px;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    background-color: #d2a5a5;
    display: flex;

    .login-container{
        width: 35%;
        height: 100vh;
        min-height: 100vh;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .cancel-wrapper{
        width: 100%;
        height: 40px;
        position: relative;
    }
    .cancel-btn {
        color: #71adcb;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        left: 20px;
    }

    .login-userimage-wrapper{
        width: 65%;
        height: 30vh;
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
        margin-top: 10px;
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
        border-radius: 5px;
        font-size: 15px;
        &:focus {
            outline:2px solid #548EAD;
        }
    }

    .user-image-container{
        height: 500px;
        width: 700px;
        background-color: #555555;
        text-align: center;
    }
    .user-image{
        height: 500px;
        width: 700px;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        /* 유저 이미지의 복사 방지와 드레그 방지 */
    }
    .user-image-container > span {
        font-size: 12px;
        color: #7a7a7a;
        margin: 0 auto auto 0;
        left: 0;
    }
    .forgotpassword {
        width: 100%;
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
    .vet-login-here{
        margin: 10px 0 20px 0px !important;
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
        border: solid 2px #548EAD;
        line-height: 22px;
        margin-top: 20px;
        color: #548EAD;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
        &:hover{
            background-color: #7399ac;
            color: #ffffff;
        }
    }


    .signin-btn{
        height: 40px;
        width: 31vw;
        min-width: 355px;
        max-width: 470px;
        padding: 0;
        font-weight: 600;
        text-align: center;
        border: 0px;
        line-height: 22px;
        margin-top: 20px;
        color: #ffffff;
        border-radius: 5px;
        background-color: #548EAD;
        cursor: pointer;
        &:hover{
            background-color: #7399ac;
        }
    }
    .google-login-wrapper{
        height: 50px;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        margin-top: 0px;
        border: solid 1 1 1 1 #7399ac;
    }
    .google-login-wrapper > img {
        height: 48px;
        width: 48px;
        background-color: #FFFFFF;
        cursor: pointer;
    }
    .line-wrapper{
        height: 20px;
        width: 35vw;
        min-width: 375px;
        margin: 10px 0px;
    }
    .line {
        width: 100%;
        height: 5px;
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: #bbbbbb;
        font-size: 12px;
        margin: 8px 0px;
        &:before,
        &:after{
            content: "";
            flex-grow: 1;
            margin: 0px 16px;
            background: #bbbbbb;
            height: 1px;
            font-size:  0px;
            line-height:  0px;
        }
    }

`




export const SignIn = () => {

    return (
        <SignInStyle>
            <div className="login-container">
                <div className="cancel-wrapper">
                        <Link to={'/'}><img className="cancel-btn" src="/img/cancel_Image.png" alt="cancel"></img></Link>
                </div>
                <div className="login-logo-wrapper">
                    <Link to={"/"}><img src="/img/logo.png" alt="login-logo"></img></Link>
                    <span>Welcome to Sing In !</span>
                </div>
                <div className="login-info-wrapper">
                    <span>Email </span>
                    <input type="text" placeholder="alex@email.com"></input>
                    <span >Last Name</span>
                    <input type="text" placeholder="Enter your password"></input>
                    <span >First Name</span>
                    <input type="text" placeholder="Enter your password"></input>
                    <span >Password</span>
                    <input type="password" placeholder="Enter your password"></input>
                    <span >Confirm Password</span>
                    <input type="password" placeholder="Enter your password"></input>
                </div>
                <span className="forgotpassword"><Link to={''}>Forgot password?</Link></span>
                <button className="signin-btn">Sign in Now</button>

                <div className="line-wrapper">
                    <div className="line">OR</div>
                </div>

                    <Link to={'/login'}><button className="login-btn">Log In</button></Link>
                    <span className="vet-login-here"><Link to={''}>Are you a Vet? Login Here</Link></span>

            </div>

            <div className="login-userimage-wrapper">
                <div className="user-image-container">
                    <img className="user-image"src="/img/userImage.png" alt="user"></img>
                    <span> Our precious member of Pet24 provides this image. </span>
                </div>
            </div>
        </SignInStyle>
    )
}