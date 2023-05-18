import React from "react";
import "../css/home.css";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import  logo  from "../img/mainLogo.png";
import useWindowDimentions from "../hook/useWindowDimentions";

function Home() {
    let width = useWindowDimentions();
    return(
        <div className="home">
            {width>=900? <Navbar visible={true}/> : <NavbarCell />}
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default Home;