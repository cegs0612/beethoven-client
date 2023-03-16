import React, {useEffect,useState} from "react";
import Card from "./Card";
import Axios from "axios";
import "../css/catalog.css";


function Catalog() {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        Axios.get("https://beethovenserver.onrender.com/api/get")
        .then((res)=>setCards(res.data));
    },[]);
    
    return(
        <div className="catalog">
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