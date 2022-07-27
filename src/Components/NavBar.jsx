import React from 'react'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <ul id='nav'>
            <li>
                <Link to='/' > Home </Link>
            </li>
            <li>
                <Link to='/post/create' > Create </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;