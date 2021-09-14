import PropTypes from 'prop-types';

const AddBasket = ({addProduct}) => {
    return ( 
        <form onSubmit={addProduct}>
            <label>
                Add item
                <input type="text" name="productName" />
            </label>
            <button type="submit">Add</button>
        </form>
     );
}

export default AddBasket;

AddBasket.propTypes = {
    addProduct: PropTypes.func.isRequired,
}