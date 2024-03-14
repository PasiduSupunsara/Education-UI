import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { About } from './Components/About';
import './App.css';
import { Home } from './Components/Home';
import {Courses} from './Components/Courses'
import { Reviews } from './Components/Reviews';
import {Contact} from './Components/Contact'
import { OurTeachers } from './Components/OurTeachers';
import { message } from 'antd';


function App(){

  message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: false,
    getContainer: () => document.body,
  });

  return (  
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Reviews" element={<Reviews/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/OurTeachers" element={<OurTeachers/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}
export default App;



