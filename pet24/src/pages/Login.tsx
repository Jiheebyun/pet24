import React from "react";
import styled from "styled-components";




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
    .login-image-wrapper{
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
                        <img src="/img/logo.png" alt="login-logo"></img>
                        <span>Login into your account</span>
                    </div>
                    <div className="login-info-wrapper">
                        <span>Email address</span>
                        <input type="text" placeholder="alex@email.com"></input>
                        <span >Password</span>
                        <input type="password" placeholder="Enter your password"></input>
                    </div>
                    <button>Login</button>

                </div>
                <div className="login-image-wrapper">
                    <div className="user-image-container">
                        <img src="/img/userImage.png" alt="user"></img>
                    </div>

                </div>
            </LoginStyle>
        </>
    )
};