import {Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx'
import { ReactComponent as StrngeLogo } from '../../assets/1296154 (1).svg';
import {UserContext} from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utilities/firebase/firebase.utility';
import './navigation-component.scss';

const Navigation =() =>{
    const {currentUser,setCurrentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


        return (
        <Fragment>
            <div className='nav'>
            <Link className='logo' to='/'>
                <StrngeLogo className='logo' />
                </Link>
                
                <div className='links'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                        SIGN OUT
                        </span>)
                        :(
                <Link className='nav-link' to='/auth'>SIGN IN</Link>               
                    )
                }
                <CartIcon />

                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;