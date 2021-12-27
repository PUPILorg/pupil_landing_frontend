import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./views/About";
import Landing from "./views/Landing";
import Team from "./views/Team";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./views/Contact";

function App() {
    return (
        <Router>
            <ScrollToTop>
                <div className="App">
                    <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path={"/team"} element={<Team/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
