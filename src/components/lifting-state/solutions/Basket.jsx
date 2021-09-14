import PropTypes from 'prop-types';
import Product from "./Product";

const Basket = ({products, deleteProduct, updateQuantity}) => {

    return ( 
        <>
            <h3>Basket</h3>
            <ol>
                {
                    products.map(({productName, quantity}, i) => <Product productName={productName} quantity={quantity} deleteProduct={deleteProduct} updateQuantity={updateQuantity} id={i}/>
                    )
                }
            </ol>
       </> 
     );
}

export default Basket;

Basket.propTypes = {
    products: PropTypes.arrayOf({
        productName: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    deleteProduct: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
}