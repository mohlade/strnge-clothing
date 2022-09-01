import {Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx'
import { ReactComponent as StrngeLogo } from '../../assets/logo.svg';
import {UserContext} from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utilities/firebase/firebase.utility';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation =() =>{
    const {currentUser,setCurrentUser } = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


        return (
            <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <StrngeLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;