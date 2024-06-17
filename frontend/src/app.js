import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Leader from './pages/leader.js';
import Calc from './pages/calc.js';


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/leader" element={<Leader/>}/>
                <Route path="/calc" element={<Calc/>}/>
            </Routes>
        </Router>
    )
}

export default App;
