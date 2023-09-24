import React, { useState, useEffect } from 'react';
import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";

const DetailsItem = () => {
    const [datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter(flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                (datos.length === 0) ? <div>Cargando...</div> 
                : datos.map(items => (
                    <div key={items.id}>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct.firtsImage}
                            />
                        </div>  

                        <div className="containerRigth">
                            <Description 
                                title={items.title}
                                parrafo={items.description}
                                cantidad={items.stock}
                                precio={items.price}
                            />
                            
                            <div className="buttons">
                                <ButtonDetalles 
                                    txt="Agregar al carrito"
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailsItem;
