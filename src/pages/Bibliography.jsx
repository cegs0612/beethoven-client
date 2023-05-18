import React from "react";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import useWindowDimentions from "../hook/useWindowDimentions";
import "../css/bibliography.css";

function Bibliography() {
    const width = useWindowDimentions();
    return(
        <div className="bibliography">
            {width>=900&&<Navbar visible={false}/>}
            {width<900&&<NavbarCell />}
            <div className="container">
            <h1>Bibliography</h1>
            <h2>Biography</h2>
            <p>Pajares Alonso, R. (2014) “Época 6. 1750 - 1825 (Clasicismo),” in <span style={{fontStyle:'oblique'}}>Historia De La Música En 6 Bloques (vol.1): Músicos Y Contexto.</span>  Madrid, España: Visión Libros, pp. 282–288.</p>
            <h2>Scores</h2>
            <p>The scores were downloaded from the IMSLP database page, the chosen edition is the Breitkopf, which includes all of Beethoven's compositions and it is rated as public domain. You can explore Beethoven's works in the IMSLP site <a href="https://imslp.org/wiki/Category:Beethoven,_Ludwig_van" className="link">HERE</a></p>
            <h2>Disclaimer</h2>
            <p>This website was created solely to showcase skills. The biography was translated from Spanish and paraphrased by me using the provided source, and I do not claim ownership of any of the photographs displayed. The music scores featured in the catalog are classified as public domain, and the images used were extracted from those scores. No copyright infringement is intended.</p>
            </div>            
        </div>
    );
}

export default Bibliography;