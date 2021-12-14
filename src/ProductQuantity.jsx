import React from 'react';

const ProductQuantity = (props) => {
    function decreaseProductQuantity() {
        if (props.quantity <= 1) {
            return;
        }

        props.onChange(props.quantity - 1);
    }

    function increaseProductQuantity() {
        props.onChange(props.quantity + 1);
    }

    return (
        <div className="productQuantity">
            <div>Quantity:</div>
            <div className="productQuantityLinks">
                <button
                    className="productQuantityLink"
                    id="minusProduct"
                    onClick={(e) => decreaseProductQuantity(e)}
                >
                    -
                </button>
                <div className="productQuantityValue" id="productNumber">{props.quantity}</div>
                <button
                    className="productQuantityLink"
                    id="plusProduct"
                    onClick={(e) => increaseProductQuantity(e)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductQuantity;
