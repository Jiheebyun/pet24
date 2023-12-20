import React from 'react';
import styled from 'styled-components';




const NavWrapper = styled.div`
    height: 80px;
    background-color: skyblue;
    display: flex;

`




export const NavBar = () => {
    return(
        <NavWrapper>
            <div className='logo-container'>
                <img src=''></img>
                <h1>PET24</h1>
            </div>
            <div className='search-container'>
                <input></input>
            </div>
            <div>
                <ul>

                    <li>Home</li>
                    <li>Animal Hospitals</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <button>Log in</button>
                <button>Sign in</button>
            </div>

        </NavWrapper>
    )
}


