import React from 'react';
import styled from 'styled-components';
import { BestBlogLists } from '../components/Home/BestBlogList';

import { getAPI } from '../utils/getAPI';

//components


const HomeWrapper = styled.div`
    width: 100vw;
    height: 2000px;
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
    

`




// Home pages
export const Home = () => {
    console.log(getAPI())

    return (
        <HomeWrapper>
            <div className='main-img-wrapper'>
                <span className='main-text'> We Care Your Dog </span>
                <button> See More</button>
                <img className="main-img" src='img/main.png' alt='main'></img>
            </div>
            <div className='main-lists-wrapper'>
                <BestBlogLists></BestBlogLists>
            </div>
        </HomeWrapper>
    )
};