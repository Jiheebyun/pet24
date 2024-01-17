



import classes from "./blogsMain.module.css";


export default function BlogsMain (){

    
    return (
        <>
            <div className={classes.blogsMainWrapper}>
                <div className={classes.blogsImgWrapper}>
                    <img className={classes.blogsImg} src="/img/BlogMain.png"></img>
                    <div className={classes.blogsMainContentWrapper}>
                        <div className={classes.imgContentWrapper}>
                            <div className={classes.mainContentImgContainer}>

                            </div>
                            <div className={classes.mainContentContainer}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}