import React, { useEffect, useState } from 'react';
import  ItemDetail  from '../Body/ItemDetail';
import { useParams } from 'react-router-dom';
import '../styles/ItemDetailContainer.css';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { RingLoader } from 'react-spinners'; 

const ItemDetailContainer = () => {
  const [produc, setProductos] = useState(null);
  const [loader, setLoader] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);

    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const producAdapted = { id: response.id, ...data };
        setProductos(producAdapted);
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
        <ItemDetail {...produc} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
