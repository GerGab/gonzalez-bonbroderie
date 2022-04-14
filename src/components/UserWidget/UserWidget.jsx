import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {useUserContext} from '../../Context/UserContext'
import './UserWidget.css'

function UserWidget() {

    const {usuario} = useUserContext()

  return (
    <div>
        {
            usuario ?
            <i className='uNombre'>{`hola ${usuario.nombre}`}</i>
            :
            <i className='uNombre'>{' '}</i>
        }
        <Link to="/User">
            <button><FontAwesomeIcon icon={faUser}/></button>
        </Link>
    </div>
  )
}

export default UserWidget