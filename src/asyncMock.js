import id1 from './components/img/im10.png'
import id2 from './components/img/ima3.png'
import id3 from './components/img/ph2.png'


const products =[
        {
            id:'1',
            name:'monitor samsung',
            price:100,
            category:'productos',
            img: id1,
            stock: 25,
            description:"lalalala"
        },
        {
            id:'2',
            name:'mouse logitech',
            price:150,
            category:'productos',
            img: id2,
            stock: 20,
            description:"lalala"
        },
        {
            id:'3',
            name:'teclado logitech',
            price:10,
            category:'productos',
            img: id3,
            stock: 50,
            description:"lala"
        } ]

export const getProducts =( ) => {
        return new Promise(( resolve) => {
                setTimeout(() =>{
                        resolve(products)
                    }, 500)
            })
}

export const getProductById = (productId) => {
        return new Promise ((resolve) => {
                setTimeout( ( ) => {
                        resolve(products.find(prod => prod.id === productId))
                },500)
        })
}
export const getProductByCategory = (productId) => {
        return new Promise ((resolve) => {
                setTimeout( ( ) => {
                        resolve(products.find(prod => prod.category === productId))
                },500)
        })
}

export default products