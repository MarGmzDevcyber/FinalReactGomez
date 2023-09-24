import cartItem from '../resources/cartii.svg';

const AddButton = ( ) => {
        return(
                <button id="addCart">
                        <img src={cartItem} alt="add"></img>
                </button>
        )
}

export default AddButton;