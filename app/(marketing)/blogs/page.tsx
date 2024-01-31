

import BlogsMain from "../../components/blogs/blogsMain";
import classes from "./blogs.module.css";


export default function Blogs (){

    return (
        <>
            <div className={classes.blogWrapper}>
                <BlogsMain></BlogsMain>
            </div>
        
        </>
    )
}