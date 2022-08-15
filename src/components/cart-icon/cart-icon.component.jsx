import  {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/111 shopping-bag.svg'
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return(
        <div className="cart-icon" onClick={toggleIsCartOpen}> 
            <ShoppingIcon className="shopping-container" />
            <span className="item">{cartCount}</span>
        </div>
    )

}

export default CartIcon;