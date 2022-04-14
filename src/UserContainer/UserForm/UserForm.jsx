import React from 'react'
import './UserForm.css'

function UserForm({NuevoForm,gestionarCambio,enviar,sinCuenta}) {

  return (
    <div className='UserForm' onSubmit={enviar}>
        <h2>Bienvenido a Bonbroderie!</h2>
        <form>
            <input type="email" 
                    name="email" 
                    placeholder='email'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="text" 
                    name="pass" 
                    placeholder='Contraseña'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="text" 
                    name="nombre" 
                    placeholder='nombre'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="text" 
                    name="apellido" 
                    placeholder='Apellido'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="phone" 
                    name="tel" 
                    placeholder='Teléfono'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="text" 
                    name="dir" 
                    placeholder='Dirección'
                    value={NuevoForm.name}
                    onChange={gestionarCambio}
                    required
                    />
            <input type="submit" className='submit' value="Crear Usuario"/>
        </form>
        <button className='conCuenta' onClick={()=>sinCuenta(true)}>ya tengo cuenta</button>
    </div> 
  )
}

export default UserForm