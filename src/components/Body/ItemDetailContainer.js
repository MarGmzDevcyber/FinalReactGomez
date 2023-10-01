import React, { useEffect, useState } from 'react';
import  ItemDetail  from '../Body/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { RingLoader } from 'react-spinners'; 
import '../style/ItemDetContainer.css';

const ItemDetailContainer = () => {
  const [Products, setProducts] = useState(null);
  const [loader, setLoader] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);

    const docRef = doc(db, 'Products', itemId);

    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const ProductsAdapted = { id: response.id, ...data };
        setProducts(ProductsAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      {loader ? (
        <RingLoader color='#36D7B7' loading={true} size={150} /> 
      ) : (
        <ItemDetail {...Products} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
