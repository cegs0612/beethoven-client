import React, {useRef} from "react";
import "../css/navbar.css";
function Navbar () {
    const navRef = useRef();
    const showNav = ()=>{
        navRef.current.classList.toggle("show-menu")
    }

    return ( 
        <div className="navbar">
            <ul className="navbar-list" ref={navRef}>
                <a href="/">Home</a>
                <a href="/Biography">Biography</a>
                <a href="/Catalog">Catalog</a>
                <a href="Bibliography">Bibliography</a>
            </ul>
            <button className="menu-button" onClick={showNav}>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </button>
        </div>
    );
}

export default Navbar;