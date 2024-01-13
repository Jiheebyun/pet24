import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";






const BlogListsStyle = styled.div`
    height: 100%;
    width: 100vw;
    min-width: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin: 25px 0 20px 0;
    }
    .blog-lists-wrapper{
        min-width: 1080px;
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
        margin-left: -80px;
        margin-bottom: 50px;
    }
    .list-content-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 320px;
        max-width: 250px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        border-radius: 20px; 
    }
    .list-img-container{ // 이미지 컨텐트 박스 
        height: 180px;
        border-radius: 20px 20px 0 0;

        img {
            min-width: 120px;
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: 20px 20px 0 0;
            }
    }
    .content-container{ //글 컨텐트 박스 
        width: 100%;
        height: 150px;
        border-radius: 0 0 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
   
        h4{
         margin: 5px;
         font-weight: 700;
         width: 220px;
        }
        span{
            margin: 5px 10px 5 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 220px;
            height: 20px;
            color: #7A7A84;
            font-size: 12px;
            font-weight: 500;
        }
        button{
            border: none;
            outline: none;
            background-color: inherit ;
            color: #7A7A84;
            cursor: pointer;
        }
    }

    .content-icon-container{
        margin: 15px 0px 0px 0px;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        .content-date-container{
            display: flex;

        }
        .content-date-img{
            width: 15px;
            height: 15px;
        }
        .content-date{
            width: 80px;
            margin: 0px 5px 0px 5px;
        }
        .source-container{
            display: flex;
        }
        .source-from-img{
            width: 15px;
            height: 15px;
        }
        .source-from{
            width: 80px;
            margin: 0px 5px 0px 5px;
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

]




type Props = {
    blogsData: any[];
}

export const BlogLists  = () => {

    return (
        <BlogListsStyle>
                <h1> Articles</h1>
                <ul className="blog-lists-wrapper">
                    {data.map((list, idx)=>{
                        return (
                            <li key={idx} className="list-content-container">
                                <div className="list-img-container">
                                    <Link to={""} style={LinkStyle}><img src={list.urlToImage}></img></Link>
                                </div>
                                <div className="content-container">
                                    <Link to={""} style={LinkStyle}><h4>{list.title}</h4></Link>
                                    <span>{list.content}</span>
                                    <button>view more</button>
                                    <div className="content-icon-container">
                                        <div className="content-date-container">
                                            <img src="/img/date_icon.png" alt="content-date" className="content-date-img"></img>
                                            <span className="content-date">2024-01-20</span>
                                        </div>
                                        <div className="source-container">
                                            <img src="/img/person_icon.png" alt="source-from" className="source-from-img"></img>
                                            <span className="source-from">BBC News</span>

                                        </div>

                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </BlogListsStyle>
    )
};