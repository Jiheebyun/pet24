import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";



const move = keyframes`
    from{
        right: -800px;
    }
    to{
        right: 6%;
    }
`;

const SecondStepStyle = styled.div`
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
    }
    .step-img-container{
        width: 40%;
        height: 760px;
        min-width: 410px;
    }
    .firstImg > img{
        min-width: 400px;
        width: 100%;
        height: 760px;
        object-fit: cover;
        text-align: unset;
    }
`;


const ConstantContainer: any = styled.div<AnimationProps>`
            width: 630px;
            height: 430px;
            animation: ${(props)=> props.$isAnimation ? move :null} 2s;
            visibility: ${(props)=> props.$isAnimation ? '' : 'hidden'};
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
            .content-getstarted{
            }
            h1{
                font-size: 50px;
                margin: 5px 5px 20px 5px;
            }
            .content-span{
                font-size: 25px;
            }
`


interface AnimationProps {
    $isAnimation?: boolean
};

export const SecondStep = () =>{

    const target: any = useRef(null);
    const [ isAnimation, setIsAnimation ]:any = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const scrollEvent = () => {
        if(window.scrollY > 300){
            setIsAnimation(true);
        }
    };

    return (
        <SecondStepStyle>
            <div className="steps-wrapper">
                    <div className="step-img-container">
                        <div className="firstImg">
                            <img src="/img/aboutSecond.png" alt="first-step"></img>
                        </div>
                    </div>
                    <section className="step-content-container">
                        <span className="content-number">02 </span>
                        <ConstantContainer  
                            ref = {target} 
                            className="content-container"
                            $isAnimation ={isAnimation}
                        >
                            <div className="content-line-container">
                                <span className="line"> Next-Step</span>
                            </div>
                            
                            <h1>How to Register ?</h1>
                            <span className="content-span">Search for organisations by clicking  . 
                                Then, search for organisations, enter the name or a 
                                part of the name. You may restrict results by selecting a 
                                specific country or expanding the advanced search and applying 
                                further filters to the search criteria. The click on Search 
                                organisation to display the matches.</span>
                            <span> Read more.. </span>
                        </ConstantContainer>

                    </section>

                </div>
        </SecondStepStyle>
    )
};