import React, { useEffect, useState } from 'react';
import  ItemList from '../Header/ItemList';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { RingLoader } from 'react-spinners';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loader, setLoader] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then(response => {
        const productosAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProductos(productosAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [categoryId]);

  return (
    <div className='Container-text'>
      <h1>{greeting}</h1>
      {loader ? (
        <RingLoader color='#36D7B7' loading={true} size={150} />
      ) : (
        <ItemList products={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
