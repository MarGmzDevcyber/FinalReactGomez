import fetchSimulation from '../assets/fetchSimulation';
import products from '../assets/products'; 
import  { useState, useEffect } from 'react';
import CardItem from '../components item/CardItem';
import '../styles/cardItem.css'; 
import { useParams} from "react-router-dom"



const ContainerCardItems = () => {
  
  const [datos, setDatos] = useState([]);
  let {CategoryId} = useParams( );

        useEffect(() => {
            if(CategoryId === undefined) {
                  fetchSimulation(products,1000)
                        .then(resp => setDatos(resp))
                        .catch(error => console.log(error))
            }
            else{
                fetchSimulation(products.filter(filter => filter.type === CategoryId))
                    .then(resp => setDatos(resp))
                    .catch(error => console.log(error))
            }
          },[CategoryId])

  return (
    <div className="containerItems">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        stock={product.stock}
                        price={product.price}
                    />
        )
    )}
</div>      
  )
}

export default ContainerCardItems;
