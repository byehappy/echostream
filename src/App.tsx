import React, {} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import Header from "./components/header/Header";
import {HomePage, CatalogPage, AboutMePage} from './components/pages';
import GameCardContext from "./components/context/GamesContext";
import StreamersContext from "./components/context/MainStreamers";
import StreamersList from "./components/streamersList/StreamersList";
import {SkeletonTheme} from "react-loading-skeleton";


function App() {
    return (
        <StreamersContext>
            <GameCardContext>
                <Router>
                    <div className="App">
                        <Header/>
                            <Routes>
                                <Route path={'/'}>

                                    <Route index element={<HomePage/>}/>

                                    <Route path={'catalog'} element={<CatalogPage/>}/>
                                    <Route path={'/game/:gameId'} element={<StreamersList/>}/>

                                    <Route path={'about-me'} element={<AboutMePage/>}/>

                                    <Route path={'see-later'}/>

                                    <Route path={'404'}/>

                                    <Route path={'*'}/>
                                </Route>
                            </Routes>
                    </div>
                </Router>
            </GameCardContext>
        </StreamersContext>
    );
}

export default App;
