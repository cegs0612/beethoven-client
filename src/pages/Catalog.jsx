    import React from "react";
    import { useQuery } from "@tanstack/react-query";
    import Card from "../components/Card";
    import Navbar from "../components/Navbar";
    import NavbarCell from "../components/NavbarCell";
    import Axios from "axios";
    import "../css/catalog.css";
    import useWindowDimentions from "../hook/useWindowDimentions";
    import {RingLoader} from "react-spinners";

    const getSonatas = () => {
        return Axios.get("https://beethovenserver.onrender.com/api/get")
        .then((res) => {return res.data})
        .catch((error) => {throw error});
    }
    function Catalog() {
        const result = useQuery({
            queryKey: ['sonatas'],
            queryFn: getSonatas,
        })
        
        const Cards = ()=>{        
            return(
                <div className="card-container">
                    {result.isLoading && <RingLoader className="loader"/>}
                    {result.isError && <h2>An error occured</h2>}
                    {result.data && result.data.map((value)=>{return <Card key = {value.id}
                        number={value.number}
                        opus={value.opus}
                        opus_number={value.opus_number}
                        dir_img={value.dir_img}
                        dir_download={value.dir_download}
                        file_name={value.file_name}/>})
                    }
                </div>          
            ) 
        }
                
        const width = useWindowDimentions();
        
        return(
            <div className="catalog">
                {width>=900&&<Navbar visible={false}/>}
                {width<900&&<NavbarCell />}
                <h1>Catalog</h1>
                <Cards/>
            </div>
            
        );
    }

    export default Catalog;