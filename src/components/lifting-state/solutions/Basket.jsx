import PropTypes from 'prop-types';
import Product from "./Product";
import UpdateProduct from './UpdateProduct';

const Basket = ({ products, deleteProduct, updateProduct, currentProduct, updateCurrent }) => {

    return (
        <>
            <h3>Basket</h3>
            <ol>
                {
                    products.map(({ productName, quantity }, i) => <Product
                        productName={productName}
                        quantity={quantity}
                        deleteProduct={deleteProduct}
                        updateCurrent={updateCurrent}
                        id={i}
                        key={productName + i}
                    />
                    )
                }
            </ol>
            <UpdateProduct product={currentProduct} updateProduct={updateProduct} />
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
    updateProduct: PropTypes.func.isRequired, 
    currentProduct: PropTypes.func.isRequired, 
    updateCurrent: PropTypes.func.isRequired,
}