import Image from "./ItemImg";
import '../../components/styles/cardItem.css';
import Description from "./Description";
import DetailButton from "./DetailButton";
import AddButton from "./addButton";


const CardItem =(props) => {
        return(
                <div className="cardItems">
                    <Image 
                                Imagen={props.imagen} />
                    <Description 
                                name={props.name}
                               stock= {props.stock}
                                price={props.price}
                                 />
                    <div className="buttons">
                            <DetailButton />
                            <AddButton />
                    </div>
                </div>
        )
}

export default CardItem;