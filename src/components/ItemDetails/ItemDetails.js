import Image from "./Image";
import Description from "../components item/Description";
import "../styles/DetailsItem.css";
import DetailButton from "../components item/DetailButton";
import fetchSimulation from "../../resources/fetchSimulation";
import products from "../../resources/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const DetailsItem = () => {
        const [ datos, setDatos ] = useState([]);
        const { idItem } = useParams();
        
        useEffect(() => {

            setDatos([])

            fetchSimulation(products.filter( flt => flt.id == idItem), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }, [idItem])
        
    return(
        <div className="detailsItem">{
                    datos.map( items=>(
                            <>
                                        <div className="containerLe">
                                                    <Image imagen= {datos[0].imageProduct}/>
                                        </div>
                                        <div className="containerRi">
                                                <Description 
                                                        name={datos[0].name}
                                                        description={datos[0].description}
                                                        stock={datos[0].stock}
                                                        price={datos[0].price} 
                                                />
                                                <div className="buttons">
                                                        <addButton
                                                                cant={5}
                                                        />
                                                        <DetailButton 
                                                                txt="Agregar al carrito"
                                                        />
                                                </div>
                                        </div>
                            </>
            ),
)} </div>
    )
}        

export default DetailsItem;