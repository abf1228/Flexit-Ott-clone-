import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {

 

  return (
    <div className="App">
     <Router>
        <Routes>
        <Route exact path="/1" element={<HomeScreen/>}/>
        <Route exact path="/" element={<LoginScreen/>}/>
        
 {/*   test case :- <Route exact path="/test" element={<h1>sajghdgdjasjdfd</h1>}/> */}
        </Routes>      
     </Router>
    </div>
  );
}

export default App;
