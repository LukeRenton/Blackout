import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import LightIntro from './pages/IntroLight/IntroLight'; // Landing Page
import LoginPage from './pages/Login Page/LoginPage'; //Login Page
import Info1 from './pages/IntroLight/Info1' //Second Landing Page
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
     <div className='container'>
      {/* <LightIntro /> */}

      {/* BrowserRouter links routes to browser */}
      <BrowserRouter>

      {/* Define each route inside Routes */}
      <Routes>

        {/* Needs a path (url). Element will be the component displayed */}
        <Route path="/" element={<LightIntro />} />

        <Route path="/info1" element={<Info1 />} />
      </Routes>
    </BrowserRouter>
       {/* <Info1 /> */}
    </div>


  );
}

export default App;
