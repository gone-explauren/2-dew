import React from 'react';

function NavBar (){
  return(
    <nav className='nav'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/settings'>Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;