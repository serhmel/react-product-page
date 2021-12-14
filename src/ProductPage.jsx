import React, {useState} from 'react';
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

const ProductPage = () => {
    const [product, setProduct] = useState({
        name: '[Sample] Fog Linen Chambray Towel - Beige Stripe',
        price: 49,
        sku: 'SLCTBS',
        images: [
            'https://cdn11.bigcommerce.com/s-r6tm9jl2ef/images/stencil/500x659/products/77/266/foglinenbeigestripetowel1b.1589696066.jpg?c=1',
            'https://cdn11.bigcommerce.com/s-r6tm9jl2ef/images/stencil/640w/products/77/267/foglinenbeigestripetowel2b.1589696066.jpg?c=1',
            'https://cdn11.bigcommerce.com/s-r6tm9jl2ef/images/stencil/640w/products/77/265/foglinenbeigestripetowel3b.1589696066.jpg?c=1'
        ],
        id: 777777,
        sizes: [
            {
                value: 'XS',
                label: 'XS',
            },
            {
                value: 'S',
                label: 'S',
            },
            {
                value: 'M',
                label: 'M',
            },
            {
                value: 'L',
                label: 'L',
            },
            {
                value: 'XL',
                label: 'XL',
            }
        ],
        colors: [
            {
                value: 'red',
                label: 'Red',
            },
            {
                value: 'black',
                label: 'Black',
            },
            {
                value: 'yellow',
                label: 'Yellow',
            },
            {
                value: 'blue',
                label: 'Blue',
            },
            {
                value: 'grey',
                label: 'Grey',
            },
            {
                value: 'purple',
                label: 'Purple',
            },
            {
                value: 'orange',
                label: 'Orange',
            },
            {
                value: 'green',
                label: 'Green',
            }
        ]
    });

    return (
        <div className="productPage">
            <div className="productView">
                <ProductImages product={product}/>
                <ProductDetails product={product}/>
            </div>
        </div>
    );
};

export default ProductPage;
