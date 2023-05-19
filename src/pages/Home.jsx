import React, {useEffect} from "react";
import "../css/home.css";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import  logo  from "../img/mainLogo.svg";
import useWindowDimentions from "../hook/useWindowDimentions";
import Axios from "axios";

function Home() {
    let width = useWindowDimentions();

    useEffect(()=>{
        Axios.get("https://beethovenserver.onrender.com")
    },[]);

    return(
        <div className="home">
            {width>=900? <Navbar visible={true}/> : <NavbarCell />}
            <a href="/Biography">
                <img src={logo} alt="Logo" />
            </a>  
        </div>
    );
}

export default Home;