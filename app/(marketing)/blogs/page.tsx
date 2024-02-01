

import BlogsMain from "../../components/blogs/blogsMain";
import classes from "./blogs.module.css";
import BlogLists from "@/app/components/common/blogList";


export default function Blogs (){

    return (
        <>
            <div className={classes.blogWrapper}>
                <BlogsMain></BlogsMain>



                <h1 className={classes.articleContainerTitle}>Blog Lists</h1>
                <div>
                    <BlogLists></BlogLists>
                </div>
            </div>

        
        </>
    )
}