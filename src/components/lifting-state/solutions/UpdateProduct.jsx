import { useEffect, useState } from "react";

function UpdateProduct({product, updateProduct}) {
   const [productName, setProductName] = useState();
   const [quantity, setQuantity] = useState();

    useEffect(() => {
        setProductName(product.productName);
        setQuantity(product.quantity);
    }, [product]);

    return ( 
        <form onSubmit={(e) => updateProduct(e, productName, quantity, product.index)}>
            <label>
                Name:
                <input name="productName" value={productName} onChange={e => setProductName(e.target.value)}/>
            </label>
            <label>
                Quantity:
                <input name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
            </label>
            <button>Update</button>
        </form>
     );
}

export default UpdateProduct;