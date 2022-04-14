import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext([])
export const useUserContext = ()=> useContext(UserContext)

function UserContextProvider({children}) {

    const [usuario,setUsuario] = useState()

    const loggearUsuario = (usuario)=>{
        setUsuario(usuario)
        sessionStorage.setItem("usuario",JSON.stringify(usuario))
    }

    const cerrarSesion = ()=>{
        setUsuario(undefined)
        sessionStorage.removeItem("usuario")
    }


    useEffect( () => {
        let _usuario = JSON.parse(sessionStorage.getItem("usuario"));
        setUsuario(_usuario);
    },[])

  return (
    <UserContext.Provider value={{
        usuario,
        loggearUsuario,
        cerrarSesion
    }}>
        {children}

    </UserContext.Provider>
  )
}

export default UserContextProvider