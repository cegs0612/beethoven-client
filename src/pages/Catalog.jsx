import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import NavbarCell from "../components/NavbarCell";
import Axios from "axios";
import "../css/catalog.css";
import useWindowDimentions from "../hook/useWindowDimentions";

function Catalog() {
    const [cards,setCards]=useState([]);
    const width = useWindowDimentions();
    useEffect(()=>{
        Axios.get("https://beethovenserver.onrender.com/api/get")
        .then((res)=>setCards(res.data));
    },[]);
    
    return(
        <div className="catalog">
            {width>=900&&<Navbar visible={false}/>}
            {width<900&&<NavbarCell />}
            <h1>Catalog</h1>
            <div className="card-container">
            {cards.map((value)=>{return <Card key = {value.id}
            number={value.number}
            opus={value.opus}
            opus_number={value.opus_number}
            dir_img={value.dir_img}
            dir_download={value.dir_download}
            file_name={value.file_name}
            />})}
            </div>            
        </div>
        
    );
}

export default Catalog;