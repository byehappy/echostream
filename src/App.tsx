import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import Header from "./components/header/Header";
import {HomePage} from './components/pages';


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'}>

                        <Route index element={<HomePage/>}/>

                        <Route path={'catalog'}/>

                        <Route path={'about-us'}/>

                        <Route path={'see-later'}/>

                        <Route path={'404'}/>

                        <Route path={'*'}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
