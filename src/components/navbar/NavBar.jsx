import React, {useState} from 'react';
import './NavBar.css';
import {} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import MiMenu from '../miMenu/MiMenu';
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {

  let cantidad = 3;
  const [menuActive,setMenuActive] = useState("");

  const closeMenu = () =>{
    setMenuActive("");
  }

  return (
    <>
      <div className='NavBar'>
        <div>
          <button onClick={() => setMenuActive("Active")}><FontAwesomeIcon icon={faBars}/></button>
          <input type="text" />
        </div>
        <div>
          <button><FontAwesomeIcon icon={faUser}/></button>
          <CartWidget cantidad={cantidad}/>
        </div>
      </div>
      <MiMenu active={menuActive} closeMenu={closeMenu}/>
    </>
  )
}

export default NavBar