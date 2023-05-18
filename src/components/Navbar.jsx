import React from "react";
import "../css/navbar.css";
import { motion } from "framer-motion";

function Navbar (props) {
    const {visible} = props;
    let valInicial = {};
    visible? valInicial={opacity:0.2} : valInicial={opacity:0}
    
    return ( 
        <motion.div 
            className="navbar"
            initial={valInicial}
            whileHover={{
                opacity: 1,
                transition: { duration: 0.5 },
              }} 
        >
            <ul className="navbar-list">
                <motion.a 
                    href="/" 
                    whileHover={{scale: 1.1,}}
                    whileTap={{scale:0.95}} 
                    transition={{duration:0.3}}
                >Home</motion.a>
                <motion.a 
                    href="/Biography" 
                    whileHover={{scale: 1.1,}}
                    whileTap={{scale:0.95}} 
                    transition={{duration:0.3}}
                >Biography</motion.a>
                <motion.a 
                    href="/Catalog" 
                    whileHover={{scale: 1.1,}}
                    whileTap={{scale:0.95}} 
                    transition={{duration:0.3}}
                >Catalog</motion.a>
                <motion.a 
                    href="Bibliography" 
                    whileHover={{scale: 1.1,}}
                    whileTap={{scale:0.95}} 
                    transition={{duration:0.3}}
                >Bibliography</motion.a>
            </ul>
        </motion.div>
    );
}

export default Navbar;