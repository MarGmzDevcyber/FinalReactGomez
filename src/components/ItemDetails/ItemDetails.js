import Image from "../img/im10.png";
import Description from "./Description";
import DetailsButton from "./DetailsButton";
import fetchSimulation from "../assets/fetchSimulation";
import products from "../assets/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetails = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([]);
        
        fetchSimulation(products.filter(flt => flt.id === idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error));
    }, [idItem] ) 

    return (
        <div className="detailsItem">
          {datos.map((items) => (
            <>
              <div className="containerLeft">
                <Image imagen={items.image} />
              </div>
      
              <div className="containerRigth">
                <Description
                  name={items.name}
                  description={items.description}
                  stock={items.stock}
                  price={items.price}
                />
      
                <div className="buttons">
                  <DetailsButton txt="Agregar al carrito" />
                </div>
              </div>
            </>
          ))}
        </div>
      );
      
      
}
                        
export default ItemDetails;
