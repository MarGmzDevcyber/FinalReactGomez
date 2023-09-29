import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, where, Timestamp, writeBatch, addDoc, documentId } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';
import CartProvider from '../Header/ProviderCart';
import CheckoutForm from './CheckoutForm';
import Swal from 'sweetalert2';

const Checkout = () => {
    return (
        <CartProvider>
            <CheckoutContent />
        </CartProvider>
    );
}



const CheckoutContent = () => {
    const  {Cart, total, clearCart}  = useContext(CartProvider);
    const [loader, setLoader] = useState(false);
    const [idOrder, setIdOrder] = useState('');

    const createOrder = async ({ name, phone, email }) => {
        setLoader(true);

        try {
            const objOrder = {
                comprador: {
                    name, phone, email
                },
                items: Cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = Cart.map(prod => prod.id)

            const ProductsRef = collection(db, 'products')
            const ProductsAddedFromFirestore = await getDocs(query(ProductsRef, where(documentId(), 'in', ids)))
            const { docs } = ProductsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = Cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setIdOrder(orderAdded.id)
                clearCart()

            } else {
                console.error('No hay suficiente stock')
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    const redirectToIndex = () => {
        window.location.href = '/';
    }

    useEffect(() => {
        if (!loader && idOrder) {
            Swal.fire({
                title: "Su pedido ha sido realizado! Gracias por confiar en nosotros",
                text: `Su número de orden es : ${idOrder}`,
                icon: "success",
                confirmButtonText: "Volver al principio",
                customClass: {
                    confirmButton: "button-success"
                },
                onClose: () => {
                    redirectToIndex();
                }
            });
        } else if (loader) {
            Swal.fire({
                title: "Generando número de orden",
                text: "Aguarde mientras se genera su ID...",
                allowOutsideClick: false,
                customClass: {
                    confirmButton: "button is-success is-rounded"
                },
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
        }
    }, [loader, idOrder]);

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}
export default Checkout;