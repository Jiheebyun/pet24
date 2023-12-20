import React from 'react';
import './App.css';
import styled from 'styled-components'; // 에러 : Could not find a declaration file for module 'styled-components'. 해결하기위해서 참조 : https://garniel23.tistory.com/entry/%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-styled-components-Could-not-find-declaration-file

import { NavBar } from './components/navBar';


const Parent = styled.div`
  min-width: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: #d8d8d8;
`




function App() {



  return (
    <Parent>
      <NavBar></NavBar>
    </Parent>
  );
}

export default App;
