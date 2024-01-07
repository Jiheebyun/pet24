import React from "react";
import styled from "styled-components";






const BlogListsStyle = styled.div`
    height: 100vh;
    width: 100vw;
    min-width: 1080px;
    background-color: #e6e6e6;
    h1{
        margin: 20px 0 20px 0;
        color: #6d6d6d;
    }
    .blog-lists-wrapper{
        width: 100vw;
        min-width: 1080px;
        background-color: #a04040;
        display: flex;
        justify-content: space-between;
    }
    .lists-container {
        margin: 15px;
        min-width: 350px;
        width: 400px;
        height: 450px;
        background-color: #e6e6e6;
        img {
            min-width: 350px;
            width: 100%;
            height: 350px;
            object-fit: cover;
        }
        h4{
            margin: 0;
        }
        p{
            margin: 0;
        }
    }


`


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
                                <img src={list.urlToImage}></img>
                                <h4>{list.title}</h4>
                                <p>{list.content}</p>
                            </div>
                        )
                    })}
                </div>
        </BlogListsStyle>
    )
};