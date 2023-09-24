import kda from "../img/ph2.png"

const  products = [

        {
            id:1,
            name:"Monitor Samsung",
            description:"",
            stock:"140",
            category:"procesador",
            image: kda,
            price:350000,
        },
        {
            id:2,
            name:"Mouse Logitech",
            description:"",
            stock:25,
            category: "perifericos",
            image: "",
            price:60000,
        },
        {
            id:3,
            name:"Gabinete Redragon",
            description:"",
            stock:45,
            category: "componentes",
            image: "",
            price:230000,
        },
        {
            id:4,
            name:"Teclado Logitech Aurora",
            description:"",
            stock:55,
            category: "accesorios",
            image: "",
            price:280000,
        },
        {
            id:5,
            name:"Mouse Logitech Pop",
            description:"",
            stock:70,
            category: "accesorios",
            image: "",
            price:120000,
        },
        {
            id:6,
            name:"Auriculares Logitech G733 KD/A",
            description:"",
            stock:85,
            category: "accesorios",
            image: "",
            price:240000,
        },
        {
            id:7,
            name:"Radeon RX 6700 XT Challenger D 12GB OC",
            description:"",
            stock:40,
            category: "perifericos",
            image: "",
            price:300000,
        },
        {
            id:8,
            name:"Auriculares Kraken Razer",
            description:"",
            stock:65,
            category: "perifericos",
            image: "",
            price:30000,
        },
        {
            id:9,
            name:"Auriculares Kraken Razer",
            description:"",
            stock:65,
            category: "perifericos",
            image: "",
            price:30000,
        },
        {
            id:10,
            name:"Auriculares Kraken Razer",
            description:"",
            stock:65,
            category: "procesador",
            image: "",
            price:30000,
        },
        {
            id:11,
            name:"Auriculares Kraken Razer",
            description:"",
            stock:65,
            category: "procesador",
            image: "",
            price:30000,
        }
]

export const getProducts = ( ) => {
        return new Promise (( resolve) =>{
                setTimeout(() => {
                        resolve(products)
                },500)
        })
}

export const getProductById =(productId) =>{
        return new Promise ((resolve) =>{
                setTimeout(() => {
                        resolve(products.find(prod => prod.id === productId))
                },500)
        })
}
export default products