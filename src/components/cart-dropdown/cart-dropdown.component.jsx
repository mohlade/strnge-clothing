import Button from '../button-components/button-components'

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>
            GO TO CHECK OUT
        </Button>

        </div>
    )
}

export default CartDropdown;