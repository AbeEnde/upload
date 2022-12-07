import React from 'react';
import logo from './logo.svg';
import './App.css';
 import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import FileUpload from './fileUpload';
import { Display } from './display';


function App() {
  return (
    <Router>
    <div>

      <Routes>
      <Route path='/' element ={<Display/>}/>
      <Route  path ='FileUpload' element={<FileUpload/>} />
      </Routes>
    </div>
       
    
    </Router>


  );
}

export default App;
