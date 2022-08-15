import { useContext } from 'react';

import Button from '../button-components/button-components';
import { CartContext } from '../../context/cart.context';

import './product.styles.scss';



const ProductCard = ({ product }) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart (product);
    return (

       <div className='product-card'>
        <img src={imageUrl} alt={`${name}`}   />
        <div className="footer">
            <span className='name'>{name}</span>
            <span className= 'price'>{price}</span>
        </div>
          <Button buttonType='inverted' onClick={addProductToCart}>
           Add to cart
        </Button>
      </div>
    );
};


export default ProductCard;