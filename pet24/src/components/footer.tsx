import React from "react";
import styled from "styled-components";





const FooterStyle = styled.footer`
    width: 100%;
    height: 100px;
    margin-top: auto;
    background-color: #dde0ea;

    .footer-wrapper{
        width: 100vw;
        max-width: 1100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    .title{
        font-weight: 600;
        font-size: 20px;
    }

`



export const Footer = ()=>{

    return (
        <FooterStyle>
            <div className="footer-wrapper">
                <h2 className="title">THIS IS FOOTER</h2>
            </div>
        </FooterStyle>
    )
}