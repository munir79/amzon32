import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.svg'

import './Heade.css'

const Header = () => {
    return (
        <div className='head1'>
         <nav className='header'>
         <div ><img src={logo} alt="" /></div>
         <div>
         <Link to='/shop'> Shop</Link>
          
         
          <Link to='/login'> Log-in</Link>
          <Link to='/out'>About</Link>
          <Link to='/orders'> Orders</Link>
         
         </div>
         </nav>


        </div>
    );
};

export default Header;