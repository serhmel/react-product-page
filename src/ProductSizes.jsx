import React from 'react';

const ProductSizes = (props) => {
    return (
        <div className="productSizes">
            <div>Size: Required</div>
            <div className="productSizeLinks">
                {props.sizes.map((size, index) => {
                    return <label className="radioSize" key={index}>
                        <input
                            type="radio"
                            name="product_size"
                            value={size.label}
                            checked={props.selectedSize === size.label}
                            onChange={() => props.onChange(size)}
                        />
                        <div className="radioSizeText">
                            {size.value}
                        </div>
                    </label>
                })}
            </div>
        </div>
    );
};

export default ProductSizes;
