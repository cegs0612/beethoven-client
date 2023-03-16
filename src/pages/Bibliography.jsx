import React from "react";
import "../css/bibliography.css";
function Bibliography(props) {
    return(
        <div className="bibliography">
            <h1>Bibliography</h1>
            <div className="container">
            <h3>Biography</h3>
            <p>Pajares Alonso, R. (2014) “Época 6. 1750 - 1825 (Clasicismo),” in <span style={{fontStyle:'oblique'}}>Historia De La Música En 6 Bloques (vol.1): Músicos Y Contexto.</span>  Madrid, España: Visión Libros, pp. 282–288.</p>
            <h3>Photos</h3>
            <p>Fernández, T. and Tamaro, E. (2004) <span style={{fontStyle:'oblique'}}>Ludwig van Beethoven. Biografía, Biografías y Vidas, La enciclopedia gráfica en línea.</span>  Available at: https://www.biografiasyvidas.com/monografia/beethoven/ (Accessed: January 12, 2022).</p>
            <h3>Scores</h3>
            <p>The scores were downloaded from the IMSLP database page, the chosen edition is the Breitkopf, which includes all of Beethoven's compositions and it is rated as public domain. You can explore Beethoven's works in the IMSLP site <a href="https://imslp.org/wiki/Category:Beethoven,_Ludwig_van" className="link">HERE</a></p>
            </div>            
        </div>
    );
}

export default Bibliography;