import React from "react";
import styled from "styled-components";

import { BlogMain } from "../components/Blogs/BlogMain";
import { BlogLists } from "../components/Blogs/BlogLists";



const BlogStyle = styled.div`
    min-width: 1080px;
    width: 100vw;
`


export const Blogs = () => {
    return (
        <BlogStyle>
            <BlogMain></BlogMain>
            {/* <h1>This is a blog pages</h1> */}
            <BlogLists></BlogLists>

        </BlogStyle>
    )
};

