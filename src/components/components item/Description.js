const Description = (props ) => {
        return(
                <div className="cardDescription">
                        <h3 className="title">
                                {props.name}
                        </h3>
                        <span className="cant">
                               En stock: {props.stock}
                        </span>

                        <span className="price">
                                $ {props.price}
                        </span>
                </div>
        )
}
export default Description;