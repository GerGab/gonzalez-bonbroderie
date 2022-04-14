import React, { useState} from 'react';
import './NavBar.css';
import {} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import MiMenu from '../miMenu/MiMenu';
import CartWidget from '../CartWidget/CartWidget'
import UserWidget from '../UserWidget/UserWidget';



function NavBar() {

  const [menuActive,setMenuActive] = useState(true);

  const closeMenu = () =>{
    setMenuActive(false);
  }

  return (
    <>
      <div className='NavBar'>
        <div>
          <button onClick={() => setMenuActive(true)}><FontAwesomeIcon icon={faBars}/></button>
          <input type="text" placeholder=''/>
        </div>
        <div>
          <UserWidget/>
          <CartWidget/>
        </div>
      </div>
      <MiMenu active={menuActive} closeMenu={closeMenu}/>
    </>
  )
}

export default NavBar