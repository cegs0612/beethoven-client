import React from "react";
import "../css/home.css";
function Home(props) {
    return(
        <div className="home">
            <h1>Beethoven Sonatas' Blog</h1>
            <div className="img">
                <img src="./img/beethoven_portrait.jpg" alt="" />
            </div>
            <p className="paragraph-dark">In this blog you will find a catalog of Beethoven's piano sonatas</p>
        </div>
    );
}

export default Home;