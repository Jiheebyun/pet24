



import classes from "./blogsMain.module.css";
import Image from "next/image";


export default function BlogsMain (){

    
    return (
        <>
            <div className={classes.blogsMainWrapper}>
                <div className={classes.blogsImgWrapper}>
                    <img className={classes.blogsImg} src="/img/BlogMain.png"></img>
                    
                    <div className={classes.blogsMainContentWrapper}>
                        <div className={classes.imgContentWrapper}>
                            <div className={classes.mainContentImgContainer}>
                                <div className={classes.bestListImgContainer}>
                                    <Image 
                                        src='/img/BlogBestList.jpg' 
                                        alt='main'
                                        width={330}
                                        height={260}
                                        objectFit={'cover'}
                                    ></Image>
                                </div>
                            </div>

                            <div className={classes.mainContentContainer}>
                                <div className={classes.articleContainer}>
                                    <div className={classes.articleTitleH2Container}>
                                        <h2>Dog Walking 5 Tips</h2>
                                    </div>
                                    <div className={classes.articleContentSpanContainer}>
                                    <article>
                                        Summer in Australia is a time of fun, sun, and long walks with your furry best friend! 
                                        But as the mercury rises, it’s crucial to make sure your dog’s exercise routine prioritises their safety and wellbeing.
                                    </article>
                                    </div>
                                    <div>
                                        <span> 1. ABCD </span>
                                        <span> 2. ABCD </span>
                                        <span> 3. ABCDE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}