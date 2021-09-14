import { useState } from "react";
import AddBasket from "./AddBasket";
import Basket from "./Basket";

const ProductManager = () => {

    const [products, setProducts] = useState([]);

    const updateQuantity = (index, change) => {
        const _products = [...products];
        _products[index].quantity += Number.parseInt(change);
        setProducts(_products);
    }

    const deleteProduct = (index) => {
        const deleted = [...products];
        deleted.splice(index, 1); // modifies the array to remove the value at that index - DOES NOT RETURN THE MODIFIED ARRAY
        setProducts(deleted);
    }

    const addProduct = e => {
        e.preventDefault();
        const productName = e.target.productName.value;
        e.target.productName.value = "";
        if (productName) setProducts([...products, { productName, quantity: 1}]);
    }

    return ( 
        <>
            <AddBasket addProduct={addProduct}/>
            <Basket products={products} deleteProduct={deleteProduct} updateQuantity={updateQuantity}/>
        </>
     );
}

export default ProductManager;