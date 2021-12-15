import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./views/About";
import Landing from "./views/Landing";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
