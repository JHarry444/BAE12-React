import { useState } from "react";
import PropTypes from 'prop-types';

const Product = ({productName, quantity, deleteProduct, updateQuantity, id}) => {

    const [quantityChange, setQuantityChange] = useState(0);
    
    return ( 
        <>
            <p>
                Name: {productName} Quantity: {quantity}
                {" "}
                <button  onClick={() => deleteProduct(id)}>Delete</button>
            </p>
        
            <input value={quantityChange} onChange={e => setQuantityChange(e.target.value)}/>
            <button onClick={() => updateQuantity(id, quantityChange)}>Modify Quantity</button>
        </>
     );
}

export default Product;

Product.propTypes = {
    productName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}