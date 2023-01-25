import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import Header from "./components/header/Header";
import {HomePage, CatalogPage, AboutMePage} from './components/pages';


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'}>

                        <Route index element={<HomePage/>}/>

                        <Route path={'catalog'} element={<CatalogPage />}/>

                        <Route path={'about-me'} element={<AboutMePage/>}/>

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
