import React, {useState} from 'react';
import ProductSizes from "./ProductSizes";
import ProductColors from "./ProductColors";
import ProductQuantity from "./ProductQuantity";

const ProductDetails = ({product}) => {
    const [selectedOptions, setSelectedOptions] = useState({
        size: product.sizes[0].value,
        color: product.colors[0].value,
    });

    const [quantity, setQuantity] = useState(1);

    const chooseProductSize = (size) => {
        setSelectedOptions({...selectedOptions, size: size.value});
    };

    const chooseProductColor = (color) => {
        setSelectedOptions({...selectedOptions, color: color.value});
    };

    const selectedInfo = () => {
        return {id: product.id, options: selectedOptions, quantity};
    };

    return (
        <div className="productDetails">
            <div className="productTittle ">{product.name}</div>
            <div className="productPrice">${product.price.toFixed(2)}</div>
            <div className="productReviews ">(No reviews yet)</div>
            <div className="productSKU">
                <div>SKU:</div>
                <div>{product.sku}</div>
            </div>
            <ProductSizes sizes={product.sizes} selectedSize={selectedOptions.size} onChange={chooseProductSize} />
            <ProductColors colors={product.colors} selectedColor={selectedOptions.color} onChange={chooseProductColor} />
            <ProductQuantity quantity={quantity} onChange={(quantity) => setQuantity(quantity)} />
            <div className="productAddLink">
                <button
                    className="addToCart"
                    onClick={(e) => console.log(selectedInfo())}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
