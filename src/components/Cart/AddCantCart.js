const AddCantCart =(props) =>{
        return(
                <div className="addCant">
                        <span>Lo quiero:</span>
                        <div>
                            <button id="decrement">-</button>
                            <span className="cantTXT">{props.cant} unidades</span>
                            <button id="increment">+</button>
                        </div>
                </div>
        )
}

export default AddCantCart;