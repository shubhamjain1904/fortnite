import React from 'react';

import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle={
        color:'white'
    };

  return (
    <nav>Logo
    <ul className="nav-Links">
        <Link style={navStyle} to='/About'>
        <li>About</li>
        </Link>
        <Link style={navStyle} to='/Shop'>
        <li>Shop</li>
        </Link>
    </ul>
    </nav>
  );
}

export default Nav;
