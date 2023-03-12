import React from "react";
import { useEffect } from "react";

import "./App.css"

// 548e2e0b

const API_URL = "https://www.omdbapi.com?apikey=548e2e0b";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("SpiderMan");

    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => { }}>

                </input>
                <img>
                    src={ }
                    alt="Search";
                </img>
            </div>
        </div>
    );
}

export default App;