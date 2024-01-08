import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";






const BlogListsStyle = styled.div`
    height: 100vh;
    width: 100vw;
    min-width: 1080px;
    h1{
        margin: 20px 0 15px 0;
    }
    .blog-lists-wrapper{
        width: 100vw;
        min-width: 1080px;
        display: flex;
        justify-content: space-between;
    }
    .lists-container {
        margin: 15px;
        margin-left: 30px;
        margin-right: 30px;
        min-width: 300px;
        width: 350px;
        height: 450px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        background-color: #f3f3f3;
        img {
            min-width: 300px;
            width: 100%;
            height: 350px;
            object-fit: cover;
        }
        h4{
            padding: 5px;
            margin: 0;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 17px;
            font-weight: 1000;
            text-align: center;
        }
        p{
            margin: 0;
            padding: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: break-word;
            -webkit-line-clamp: 2 ;
            -webkit-box-orient: vertical;
        }
        button{
            border: none;
            outline: none;
            background-color: inherit ;
            cursor: pointer;
        }
    }


`

const LinkStyle: any ={
    textAlign: "center",
    textDecoration: "none", 
    color: "inherit"
}

const data = [
    {
    author: "https://www.facebook.com/bbcnews",
    content: "American bully XL dogs in England and Wales must be kept on a lead and muzzled in public now that a new law has come into effect. \r\nBreeding, selling or abandoning them is also illegal as of New Year… [+2413 chars]",
    description: "Under new rules, owners of the breed must also ensure their dog is muzzled in public.",
    publishedAt: "2023-12-31T02:17:12Z",
    title: "American bully XL dogs must now be kept on a lead",
    url: "https://www.bbc.co.uk/news/uk-67851343",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/17CCD/production/_131058479_dogs2.jpg",
    source: {
        id: "bbc-news",
        name: "BBC News"
    }
    },
    {
    author: null,
    content: "BBC correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn. The pair have been learning to live together - walking, taking public transport, drinking coffee and even … [+384 chars]",
    description: "Correspondent Sean Dilley has been getting to know his new guide dog, also called Shawn.",
    publishedAt: "2024-01-05T12:34:41Z",
    source: {id: 'bbc-news', name: 'BBC News'},
    title: "BBC reporter Sean Dilley finally meets his new guide dog",
    url: "https://www.bbc.co.uk/news/av/uk-67890376",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/2B03/production/_132211011_p0h387r0.jpg"
    },
    {
    author: null,
    content: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway in New York. \r\nSeveral cars slowed down to corral the dog to one side, before one motorist gave cha… [+152 chars]",
    description: "Dashcam footage shows drivers trying to steer the dog towards exits on the Staten Island Expressway.",
    publishedAt: "2023-12-13T03:06:05Z",
    source: {id: 'bbc-news', name: 'BBC News'},
    title: "Watch: Motorists block road to save runaway chihuahua",
    url: "https://www.bbc.co.uk/news/av/world-us-canada-67700100",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/7835/production/_132037703_p0gz6z13.jpg"
    },

]




type Props = {
    blogsData: any[];
}

export const BestBlogLists  : React.FC<Props> = ({blogsData}) => {



    return (
        <BlogListsStyle>
                <h1> Articles</h1>
                <div className="blog-lists-wrapper">
                    {data.map((list, idx)=>{
                        return (
                            <div key ={idx} className="lists-container">
                                <Link to={""} style={LinkStyle}><img src={list.urlToImage}></img></Link>
                                <Link to={""} style={LinkStyle}><h4>{list.title}</h4></Link>
                                <Link to={""} style={LinkStyle}><p>{list.content}</p></Link>
                                <button>view more</button>
                            </div>
                        )
                    })}
                </div>
        </BlogListsStyle>
    )
};