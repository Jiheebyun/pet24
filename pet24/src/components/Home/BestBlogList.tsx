import React from "react";
import styled from "styled-components";






const BlogListsStyle = styled.div`
    height: 100vh;
    width: 100vw;
    min-width: 1080px;
    background-color: #e6e6e6;
    h1{
        margin: 0 0 20px 0;
        color: #6d6d6d;
    }
    .blog-lists-wrapper{
        width: 100vw;
        height: 100vh;
        min-width: 1080px;
        background-color: #a04040;
        display: flex;
        justify-content: space-between;
    }
    .lists-container {
        margin: 10px;
        min-width: 250px;
        width: 250px;
        height: 300px;
        background-color: #e6e6e6;
    }


`


export const BestBlogLists = () => {
    return (
        <BlogListsStyle>
                <h1> The Best Blogs</h1>
                <div className="blog-lists-wrapper">
                    <div className="lists-container">
                    </div>

                    <div className="lists-container">
                    </div>

                    <div className="lists-container">
                    </div>

                    <div className="lists-container">
                    </div>

                </div>
        </BlogListsStyle>
    )
};