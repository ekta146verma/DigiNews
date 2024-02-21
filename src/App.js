import './App.css';
// import React, { Component } from 'react';
import React from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
    const apikey = '301cf1c64f0d4aecbb2f6d8aaafeee10'
    // const apikey = '1834ad42eb01433d83facfb182fd15c9'
    let category = 'science', language = 'en', country = 'in';
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<News country={country} pageSize={12} category={category} language={language} apikey={apikey}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;