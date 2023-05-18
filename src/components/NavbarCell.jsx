import React, {useRef,useState} from "react";
import "../css/navbar.css";
import { motion, useMotionValue } from "framer-motion";
import menuButton from "../img/menuBtn.svg";

function NavbarCell () {
    const [isOpen, setIsOpen] = useState(false);
    const rotation = useMotionValue(0);
    const navRef = useRef();
    
    const showNav = ()=>{
        setIsOpen(!isOpen);
        navRef.current.classList.toggle("show-menu");
    }

    return ( 
        <motion.div 
            className="navbar-overlay"
            initial={{opacity:1}}
            whileHover={{
                opacity: 1,
                transition: { duration: 0.5 },
              }} 
        >
            <ul className="navbar-list" ref={navRef}>
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
            <motion.button 
                className="menu-button" 
                onClick={showNav}
                style={isOpen?{scale:1.3,rotate:rotation}:{scale:1,rotate:rotation}}
                transition={{type:"spring"}}
                variants={{
                    open: { rotate: 180 },
                    closed: { rotate: -180 },
                }}
                animate={isOpen ? "open" : "closed"}
            >   
                <img src={menuButton} alt="Menu button" />
            </motion.button>
        </motion.div>
    );
}

export default NavbarCell;