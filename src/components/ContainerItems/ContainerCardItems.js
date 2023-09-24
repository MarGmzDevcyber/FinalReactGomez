import "../../components/styles/containerCardItems.css";
import CardItem from "../components item/CardItem";
import products from "../assets/products";
import {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';


const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
  
    useEffect(() => {
      const fetchSimulation = (delay, data) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, delay);
        });
      };
  
      const fetchData = () => {
        const delay = 2000;
  
        if (idCategory == undefined) {
          fetchSimulation(delay, products)
            .then((resp) => setDatos(resp))
            .catch((error) => console.log(error));
        } else {
          const filteredProducts = products.filter((product) => product.category=== idCategory);
          fetchSimulation(delay, filteredProducts)
            .then((resp) => setDatos(resp))
            .catch((error) => console.log(error));
        }
      };
  
      fetchData();
    }, [idCategory]); // Agrega idCategory como una dependencia aquí
  
    return (
      <div className="containerCardItems">
        {datos.map((product) => (
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