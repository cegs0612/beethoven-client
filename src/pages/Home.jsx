import React from "react";
import "../css/home.css";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import  logo  from "../img/mainLogo.svg";
import useWindowDimentions from "../hook/useWindowDimentions";

function Home() {
    let width = useWindowDimentions();
    return(
        <div className="home">
            {width>=900? <Navbar visible={true}/> : <NavbarCell />}
            <a href="/Biography">
                <img src={logo} alt="Blog logo, Beethoven and text:Beethoven Sonatas Blog" />
            </a>  
        </div>
    );
}

export default Home;