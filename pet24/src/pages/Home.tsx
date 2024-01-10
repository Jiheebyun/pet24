import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BestBlogLists } from '../components/Home/BestBlogList';



//components


const HomeWrapper = styled.div`
    width: 100vw;
    height: auto;
    .main-img-wrapper{
        min-width: 1080px;
        width: 100vw;
        height: 450px;
        overflow:hidden;
        margin:0 auto;  
        position: relative;
    }
    .main-img{
        min-width: 1080px;
        width: 100vw;
        max-width: 100%; 
        height: auto;
        object-fit: cover;
        object-position: top  ;
    }
    .main-text{ 
        position: absolute;
        font-size: 60px;
        font-weight: 1100;
        left: 50%;
        top: 20%;
    }
    .main-img-wrapper > button {
        width: 115px;
        height: 35px;
        color: #353535;
        background-color: #548EAD;
        position: absolute;
        border: 0;
        border-radius: 8px;
        font-weight: 550;
        left: 65%;
        top: 50%;
        cursor: pointer;
        &:hover{
            background-color: #7399ac;
        }
    }
    .main-lists-wrapper{
        height: 100%;
    }
    

`




// Home pages
export const Home = () => {
    const [ blogsData, setBlogsData ] = useState([])

    useEffect(()=>{
        const promise = fetchBlogsListAPI();
        const getData = () => {
            promise.then((appData: any) => {
            setBlogsData(appData)
            });
        };
        getData();
    },[]);

    const fetchBlogsListAPI = async () =>{
        const apiKey = '3a9cbf1cdba94e3b81e06ad290482d8e';
        // const endpoint = 'https://newsapi.org/v2/everything';
        const endpoint = '';
  
        // API 요청에 필요한 매개변수 설정
        const params = {
          q: 'dog',
          apiKey: apiKey,
        };
        // axios를 사용하여 API 요청 보내기
        const response = await axios.get(endpoint, { params });
        return response.data.articles
    };

    console.log(blogsData)

    return (
        <HomeWrapper>
            <div className='main-img-wrapper'>
                <span className='main-text'> We Care Your Dog </span>
                <button> See More</button>
                <img className="main-img" src='img/main.png' alt='main'></img>
            </div>
            <div className='main-lists-wrapper'>
                <BestBlogLists
                    blogsData = { blogsData }
                />
            </div>
        </HomeWrapper>
    )
};