
"use client";
import Image from 'next/image'
import styles from './page.module.css'


import classes from './page.module.css';
import BlogLists from '../components/common/blogList';


export default function Home() {
  return (
    <div className={classes.homeWrapper}>
      <div className={classes.mainImgWrapper}>
          <span className={classes.mainText}> We Care Your Dog </span>
          <button className={classes.mainImgWrapperButton}> See More</button>
          <Image 
            src='/img/main.png' 
            alt='main'
            sizes={"(max-width: 768px) 100vw, 100vh"}
            layout={"fill"}
            objectFit={'cover'}
          ></Image>
      </div>
      <div className={classes.mainListsWrapper}>
        <h2 className={classes.mainListsH2} >Acticle</h2>
        <BlogLists></BlogLists>
          {/* <BestBlogLists
              blogsData = { blogsData }
          /> */}
      </div>
    </div>
  )
}
