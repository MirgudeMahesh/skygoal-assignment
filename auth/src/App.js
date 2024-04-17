
import React from 'react';
import Sender from './components/Sender';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <div >
      
      <Router>
    <Sender>
      <Routes>
  
        <Route exact path='/' element={<Signup/>}/>
        <Route exact path='/Home' element={<Home/>}/>
       
      </Routes>
      </Sender>
      
    </Router>
  </div>


  );
}


export default App;