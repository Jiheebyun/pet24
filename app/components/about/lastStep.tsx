"use client"

import React, { useRef, useEffect, useState } from "react";
import classes from "./lastStep.module.css";



export default function LastStep(){
    const target: any = useRef(null);
    const [ isAnimation, setIsAnimation ]:any = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const scrollEvent = () => {
        if(window.scrollY > 1550){
            setIsAnimation(true);
        }
    };

    return (
        <>
            <div className={classes.stepsWrapper}>
                <div className={classes.stepImgContainer}>
                    <div className={classes.firstImg}>
                        <img className={classes.firstImg} src="/img/aboutLast.png" alt="first-step"></img>
                    </div>
                </div>
                <section className={classes.stepContentContainer}>
                    <span className={classes.contentNumber}>04 </span>
                    <div 
                        ref = {target}
                        className={`${isAnimation ? classes.contentContainer : classes.contentContainerExpanded}`}
                        >
                        <div className={classes.contentLineContainer}>
                            <span className={classes.line}> Next-Step</span>
                        </div>
                        
                        <h1 className={classes.contentContainerH1}>How to Register ?</h1>
                        <span className={classes.contentSpan}>Search for organisations by clicking  . 
                            Then, search for organisations, enter the name or a 
                            part of the name. You may restrict results by selecting a 
                            specific country or expanding the advanced search and applying 
                            further filters to the search criteria. The click on Search 
                            organisation to display the matches.</span>
                        <span> Read more.. </span>
                    </div>
                </section>
            </div>


        </>
    )
}