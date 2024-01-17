
import classes from "./firstStep.module.css";






export default function FirstStep() {
    return (
        <>
                <div className={classes.stepsWrapper}>
                    <section className={classes.stepContentContainer}>
                        <span className={classes.contentNumber}>01 </span>
                        <div className={classes.contentContainer}>
                            <div className={classes.contentLineContainer}>
                                <span className={classes.line}> Get-Strated</span>
                            </div>
                            <h1 className={classes.contentContainerH1}>How to Register ?</h1>
                            <span className={classes.contentSpan}>Search for organisations by clicking  . 
                                Then, search for organisations, enter the name or a 
                                part of the name. You may restrict results by selecting a 
                                specific country or expanding the advanced search and applying 
                                further filters to the search criteria. The click on Search 
                                organisation to display the matches.</span>
                            <span > Read more.. </span>
                        </div>
                    </section>

                    <div className={classes.stepImgContainer}>
                        <div >
                            <img className={classes.firstImg} src="/img/aboutFirst.png" alt="first-step"></img>
                        </div>
                    </div>
                </div>

        </>
    )
}