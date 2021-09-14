import { useState } from 'react';
import AddBasket from './AddBasket';
import Basket from './Basket';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    productName: '',
    quantity: '',
    index: 0,
  });

  const updateCurrent = (index) => {
    setCurrentProduct({ ...products[index], index });
  };

  const deleteProduct = (index) => {
    const deleted = [...products];
    deleted.splice(index, 1);
    // modifies the array to remove the value at that index - DOES NOT RETURN THE MODIFIED ARRAY
    setProducts(deleted);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    e.target.productName.value = '';
    if (productName) setProducts([...products, { productName, quantity: 1 }]);
  };

  const updateProduct = (e, productName, quantity, index) => {
    e.preventDefault();
    const updatedProducts = [...products];
    updatedProducts[index] = { productName, quantity };
    setProducts(updatedProducts);
    setCurrentProduct({
      productName: '',
      quantity: '',
      index: 0,
    });
  };

  return (
    <>
      <AddBasket addProduct={addProduct} />
      <Basket
        products={products}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
        currentProduct={currentProduct}
        updateCurrent={updateCurrent}
      />
    </>
  );
};

export default ProductManager;
