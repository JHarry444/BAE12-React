import PropTypes from 'prop-types';

const Product = ({
  productName, quantity, deleteProduct, updateCurrent, id,
}) => (
  <>
    <p>
      Name:
      {' '}
      {productName}
      {' '}
      Quantity:
      {quantity}
      {' '}
      <button type="button" onClick={() => deleteProduct(id)}>Delete</button>
      <button type="button" onClick={() => updateCurrent(id)}>Update</button>
    </p>
  </>
);

export default Product;

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateCurrent: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
