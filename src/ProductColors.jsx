import React from 'react';

const ProductColors = (props) => {
    return (
        <div className="productColors">
            <div>Color: Required</div>
            <div className="productColorLinks">
                {props.colors.map((color, index) => {
                    return <label className="radioColor" key={index}>
                        <input
                            type="radio"
                            id={"color" + color.label}
                            name="product_color"
                            value={color.value}
                            checked={props.selectedColor === color.value}
                            onChange={() => props.onChange(color)}
                        />
                        <div
                            className="radioColorText"
                            style={{backgroundColor: color.value}}
                        />
                    </label>
                })}
            </div>
        </div>
    );
};

export default ProductColors;
