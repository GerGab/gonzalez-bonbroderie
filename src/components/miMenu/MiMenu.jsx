import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons/faX'
import "./MiMenu.css"
import { NavLink } from 'react-router-dom'

function MiMenu({active, closeMenu}) {

  return (
    <div className={`menu${active}`}>
        <div className={`menuBox${active}`}>
          <button onClick={closeMenu} className={"closeButton"}><FontAwesomeIcon icon={faX} /></button>
          <h2>BonBroderie</h2>
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Cursos</li>
          <NavLink to="/">
            <li>Shop</li>
          </NavLink>
        </div>
        <div className={`menuOut${active}`}>
          <button onClick={closeMenu} ></button>
        </div>
      </div> 
  )
}

export default MiMenu