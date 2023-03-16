import React from "react";
import Axios from "axios";
import FileDownloader from "js-file-downloader";
import "../css/card.css";


function Card(props) {
    function handleDownload(e) {
        e.preventDefault();
        const dir_file=props.dir_download;
        const file_name=props.file_name;
        Axios({
            url:"/api/download",
            method: "POST",
            responseType: "blob",
            baseURL:"https://beethovenserver.onrender.com",
            data:{"dirFile":dir_file}
        }).then((res)=>{
            const blobUrl = URL.createObjectURL(res.data)
            new FileDownloader({ 
                url: blobUrl,
                filename: file_name,
              })
              .then(function () {
                console.log("File downloaded successfully");
              })
              .catch(function (error) {
                console.log(error)
              });
        })
    }
    let opus = `Op.${props.opus}`;
    let num = "";
    props.opus_number===0? num ="" : num = ` N° ${props.opus_number}`;
    return (
        <div className="card">
            <h4>Sonata {props.number}</h4>
            <img src={props.dir_img} alt="" />            
            <p>{opus}{num}</p>
            <button className="card-button" onClick={handleDownload}>DOWNLOAD</button>
        </div>
    )
    }

export default Card;