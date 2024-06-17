import React from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
