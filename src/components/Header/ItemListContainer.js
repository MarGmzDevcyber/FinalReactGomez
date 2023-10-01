import React, { useEffect, useState } from 'react';
import  ItemList from '../Header/ItemList';
import '../style/ItemLCont.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import { RingLoader } from 'react-spinners';

const ItemListContainer = ({ greeting }) => {
  const [Products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const collectionRef = categoryId
      ? query(collection(db, 'Products'), where('category', '==', categoryId))
      : collection(db, 'Products');

    getDocs(collectionRef)
      .then(response => {
        const ProductsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(ProductsAdapted);
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
        <div className="RingLoader">
        <RingLoader color='#36D797' loading={true} size={100} justify-content="center" />
        </div>
      ) : (
        <ItemList Products={Products} />
      )}
    </div>
  );
};

export default ItemListContainer;
