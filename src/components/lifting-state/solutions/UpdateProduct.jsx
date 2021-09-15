/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function UpdateProduct({ product, updateProduct }) { // current product and the update function
  const [productName, setProductName] = useState(product.productName);
  const [quantity, setQuantity] = useState(product.quantity);
  // default value only get set once so state never changes even when new props are passed

  useEffect(() => {
    setProductName(product.productName);
    setQuantity(product.quantity);
  }, [product]); // w/e product changes it'll run the useEffect and update the state

  return (
    <form onSubmit={(e) => updateProduct(e, productName, quantity, product.index)}>
      <label>
        Name:
        <input name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} readOnly={!productName} />
      </label>
      <label>
        Quantity:
        <input name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} readOnly={!quantity} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateProduct;

UpdateProduct.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  updateProduct: PropTypes.func.isRequired,
};
