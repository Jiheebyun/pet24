import React from "react";
import styled, { keyframes } from "styled-components";





const move = keyframes`
    from{
        left: -800px;
    }
    to{
        left: 6%;
    }

`;

const FirstStepStyle = styled.div`
    .steps-wrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .step-content-container{
        min-width: 650px;
        width: 60%;
        height: 760px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .content-number{
            position: absolute;
            width: 230px;
            height: 240px;
            font-size: 140px;
            font-weight: 1000;
            color: #676767;
            top:0;
            left: 10px;
        }
        .content-container{
            width: 630px;
            height: 430px;
            animation: ${move} 2s;
            position: absolute;
            .content-line-container{
                height: 40px;
                width: 50vw;
                min-width: 355px;
                margin: 10px 0px;
            }
            .line{
                min-width: 270px;
                width: 40%;
                height: 20px;
                display: flex;
                flex-basis: 100%;
                align-items: center;
                color: #FBD784;
                font-size: 25px;
                font-weight: 800;
                margin: 8px 0px;
                &:before{
                    content: "";
                    flex-grow: 1;
                    margin: 0px 16px;
                    background: #FBD784;
                    height: 3px;
                    font-size:  0px;
                    line-height:  0px;
                }
            }
            h1{
                font-size: 50px;
                margin: 5px 5px 20px 5px;
            }
            .content-span{
                font-size: 25px;
            }
        }
    }
    
    .step-img-container{
        width: 40%;
        height: 760px;

    }
    .firstImg > img{
        min-width: 400px;
        width: 100%;
        height: 760px;
        object-fit: cover;
        text-align: unset;
    }
`;


export const FirstStep = () =>{


    return (
        <>
            <FirstStepStyle>
                <div className="steps-wrapper">
                    <section className="step-content-container">
                        <span className="content-number">01 </span>
                        <div className="content-container">
                            <div className="content-line-container">
                                <span className="line"> Get-Strated</span>
                            </div>
                            
                            <h1>How to Register ?</h1>
                            <span className="content-span">Search for organisations by clicking  . 
                                Then, search for organisations, enter the name or a 
                                part of the name. You may restrict results by selecting a 
                                specific country or expanding the advanced search and applying 
                                further filters to the search criteria. The click on Search 
                                organisation to display the matches.</span>
                            <span> Read more.. </span>
                        </div>

                    </section>
                    <div className="step-img-container">
                        <div className="firstImg">
                            <img src="/img/aboutFirst.png" alt="first-step"></img>
                        </div>
                    </div>
                </div>
            </FirstStepStyle>
        </>
    )
};