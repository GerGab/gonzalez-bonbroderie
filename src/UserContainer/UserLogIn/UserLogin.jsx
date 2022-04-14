import React, { useState } from 'react'
import './UserLogin.css'

function UserLogin({sinCuenta,loggear,login,ingreso}) {

  const [habilitado,setHabilitado] = useState(false)
  const activarBoton = (dato)=>{
    setHabilitado(dato.target.checked)
  }

  return (
    <div className='userLogin'>
      <h2>Ingresa con tu Usuario</h2>
      <form onSubmit={loggear}> 
        <div className='entradas'>
          <label htmlFor="email">Email</label>
          <input type="text" 
                  name="email"
                  value= {login.name}
                  onChange={ingreso}/>
        </div>
        <div className='entradas'>
          <label htmlFor="pass">Contraseña</label>
          <input type="text" 
                  name="pass"
                  value= {login.name}
                  onChange={ingreso}/>
        </div>
        <div className='noRobot'>
          <input type="checkbox" name="robot" onChange={(e)=>activarBoton(e)}/> 
          <label htmlFor="robot">no soy un robot</label>
        </div>
        <input type="submit" className='submit' value="Ingresar" disabled={!habilitado} />
      </form>
      <div className='opciones'>
        <button>Olvide mi contraseña</button>
        <button onClick={()=>sinCuenta(false)}>no tengo cuenta</button>
      </div>
    </div>
  )
}

export default UserLogin