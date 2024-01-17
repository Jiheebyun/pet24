import FirstStep from "../../components/about/firstStep";
import LastStep from "../../components/about/lastStep";
import SecondStep from "../../components/about/secondStep";
import ThirdStep from "../../components/about/thirdStep";
import classes from "./about.module.css";



export default function About(){

    return (
        <>
            <div className={classes.aboutWrapper}>
                <FirstStep></FirstStep>
                <SecondStep></SecondStep>
                <ThirdStep></ThirdStep>
                <LastStep></LastStep>
            </div>
        </>
    )
}