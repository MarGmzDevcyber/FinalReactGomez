import React, { useState, useEffect } from 'react';
import "../../components/styles/containerCardItems.css";
import CardItem from "../components item/CardItem";
import products from "../assets/products";
import { useParams } from 'react-router-dom';
import fetchSimulation from "../assets/fetchSimulation";

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory === undefined) {
      fetchSimulation(products, 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      const filteredProducts = products.filter(product => product.category === idCategory);
      fetchSimulation(filteredProducts, 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {datos.map(product => (
        <CardItem
          key={product.id}
          imagen={product.image}
          name={product.name}
          stock={product.stock}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ContainerCardItems;
