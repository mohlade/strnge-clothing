import {Fragment} from 'react';
import {Outlet,Link} from 'react-router-dom';
import { ReactComponent as StrngeLogo } from '../../assets/1296154 (1).svg';
import './navigation-component.scss';

const Navigation =() =>{
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
                <Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>

                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;