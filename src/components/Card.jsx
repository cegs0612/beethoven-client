import React from "react";
import Axios from "axios";
import FileDownloader from "js-file-downloader";
import { motion } from "framer-motion";
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
        <motion.div 
            className="card"
            whileHover={{scale: 1.1}}
            transition={{duration: 0.3}}
        >
            <h2>Sonata {props.number}</h2>
            <img src={props.dir_img} alt="" />            
            <p>{opus}{num}</p>
            <motion.button 
                className="card-button" 
                onClick={handleDownload}
                whileHover={{scale: 1.1,}}
                whileTap={{scale:0.95}}
                transition={{duration:0.3}}
            >DOWNLOAD</motion.button>
        </motion.div>
    )
    }

export default Card;