import Image from "./ItemImg";
import '../../components/styles/cardItem.css';
import Description from "./Description";
import DetailsButton from "./DetailsButton";
import AddButton from "./addButton";
import {Link } from "react-router.dom";
import cart from "../resources/cartii.svg";


const CardItem =(props) => {
        return(
                <div className="cardItemss">
                        <Image 
                                Imagen={props.image}
                         />
                        <div className="cardDescription">
                                        <Description 
                                                name={props.name}
                                                stock= {props.stock}
                                                price={props.price}
                                        />
                                 </div>
                    <div className="buttons">
                            <Link to ={`/item/${props.id}`}>
                                        <DetailsButton
                                                txt="Ver detalles"
                                        />
                            </Link>

                                <AddButton
                                        id={props.id}
                                        svg={cart} 
                                />
                    </div>
                </div>
        )
}

export default CardItem;