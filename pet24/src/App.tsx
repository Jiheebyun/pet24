import React, { useState } from 'react';
import './App.css';
import { Route, Routes,} from 'react-router-dom';
import styled from 'styled-components';

import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';
import { AnimalHospital } from './pages/AnimalHospital';
import { Login } from './pages/Login';
import { MainLayout } from './components/mainLayout'
import { SignIn } from './components/Login/SignIn';





const Parent = styled.div`
  min-width: 1080px;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  background-color: #d8d8d8;
`


function App() {

  return (
    <div className="App">
      <Parent>
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='hospital' element={<AnimalHospital/>}></Route>
            <Route path='blogs' element={<Blogs/>}></Route>
            <Route path='about' element={<About/>}></Route>
          </Route>
          <Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
          </Route>
        </Routes>
      </Parent>

    </div>
  );
}

export default App;


