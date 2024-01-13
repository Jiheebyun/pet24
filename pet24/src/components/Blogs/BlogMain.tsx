import React from "react";
import styled from "styled-components";





const BlogMainStyle = styled.div`
    width: 100vw;
    margin-bottom: 250px;
    .blog-img-wrapper{
        width: 100vw;
        height: 500px;
        position: relative;
        img{
            width: 100vw;
            height: 500px;
            border-radius: 0px 0px 150px 150px;
            object-fit: cover;
            object-position: top;
        }
        .blog-main-content-wrapper{
            min-width: 850px;
            max-width: 850px;
            height: 300px;
            max-height: 300px;
            background-color: #96adb9;
            position: absolute;
            top: 400px;
            left: 50%;
            transform: translate(-50%, 0%);
            border-radius: 15px;
            -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            &:hover{
                -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
                -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
                -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
                -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            }
            .img-content-wrapper{
                display: flex;
                justify-content: center;
            }
            .main-content-img-container{
                width: 700px;
                margin: 20px;
                min-height: 260px;
                max-width: 300px;
                background-color: #ffffff;
            }
            .main-content-container{
                width: 700px;
                margin: 20px;
                min-height: 260px;
                max-width: 300px;
                background-color: #b4b8b9;
                opacity: 0.6;
            }
            
        }
    }
`


export const BlogMain = ()=>{

    return (
        <>
            <BlogMainStyle>
                <div className="blog-img-wrapper">
                    <img src="/img/BlogMain.png"></img>
                    <div className="blog-main-content-wrapper">
                        <div className="img-content-wrapper">
                            <div className="main-content-img-container">

                            </div>
                            <div className="main-content-container">

                            </div>
                        </div>
                    </div>
                </div>

            </BlogMainStyle>
        </>
    )
}