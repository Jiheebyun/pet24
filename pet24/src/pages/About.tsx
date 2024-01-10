import React from "react";
import styled from "styled-components";


import { FirstStep } from "../components/About/FirstStep";
import { SecondStep } from "../components/About/SecondStep";
import { ThirdStep } from "../components/About/ThirdStep";
import { LastStep } from "../components/About/LastStep";




const AboutStyle = styled.div`
    height: 3040px;
    width: 100vw;
    min-width: 1100px;
    background-color: #575757;
`;

export const About = () => {
    return (
        <AboutStyle>
            <FirstStep></FirstStep>
            <SecondStep></SecondStep>
            <ThirdStep></ThirdStep>
            <LastStep></LastStep>
        </AboutStyle>
    )
};