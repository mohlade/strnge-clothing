import {useContext} from 'react';
import {ProductContext} from '../../context/products.context'
import ProductCard from '../../components/product-card/product-card'; 
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className="shop">
            {products.map((product) =>(
                <ProductCard key={products.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop