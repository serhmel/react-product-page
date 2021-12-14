import React, {useState} from 'react';

const ProductImages = ({product}) => {
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    return (
        <div className="productImages">
            <div className="headImage">
                <img id="currentImage" src={currentImage} alt={product.name}/>
            </div>
            <div className="productImagesLinks">
                {product.images.map((image, index) => {
                    return <div className="productImage" key={index}>
                        <img
                            className="productImagesLink"
                            src={image}
                            alt={product.name}
                            onClick={() => setCurrentImage(image)}
                        />
                    </div>
                })}
            </div>
        </div>
    );
};

export default ProductImages;
