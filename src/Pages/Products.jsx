import { useState } from 'react';
import Data from '../Data.json';
import Product from '../component/Product';

const Products = () => {
    const [products] = useState(Data.products); 

    return (
        <>
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {products.map((p) => (
                    <Product key={p.id} product={p} /> 
                ))}
            </div>
        </div>
        <div>
        </div>
        </>
    );
};

export default Products;
