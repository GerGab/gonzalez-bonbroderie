import { useState } from 'react'
import UserForm from './UserForm/UserForm'
import UserInfo from './UserInfo/UserInfo'
import UserLogin from './UserLogIn/UserLogin'
import './UserContainer.css'
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useUserContext } from '../Context/UserContext'

function UserContainer() {

  const[NuevoForm,SetNuevoForm] = useState({email:"",pass:"",nombre:"",apellido:"",tel:"",dir:""})
  const[login,setLogin] = useState({email:"",pass:""})
  const[registrado,setRegistrado] = useState(true);
  // utilizado para sweetAlert
  const MySwal = withReactContent(Swal) 
  const {usuario,loggearUsuario,cerrarSesion} = useUserContext()

  const sinCuenta = (state)=>{ 
    setRegistrado(state);
  }

  //Gestion de formulario de login.
  const gestionarIngreso = (dato)=>{
    setLogin(
      {...login,
      [dato.target.name]:dato.target.value}
    )
  }

  const loggear = async (e)=>{
    e.preventDefault()
    console.log(login.email)
    const db = getFirestore()
    const queryUsuarios = collection (db,'usuarios')
    const queryEmail = query(queryUsuarios,where('email','==',login.email))

    const list_usuario = await getDocs(queryEmail)
    if (list_usuario.docs.length > 0) {
      const usuario = list_usuario.docs[0].data()
      usuario.pass === login.pass ? 
        //ejecutar funcion loggin
        loggearUsuario(usuario)
      :
      MySwal.fire({
        title: <strong>Contraseña incorrecta!</strong>,
        html: <i>por favor intentalo de nuevo</i>,
        icon: 'warning'})
    }
    else{
      MySwal.fire({
        title: <strong>Este usuario no existe!</strong>,
        html: <i>si no tienes tadavía una cuenta crea una!</i>,
        icon: 'warning'})
    }
  }


  // Gestion de formulario para creacion de usuario
  const gestionarCambio = (dato) =>{
    SetNuevoForm(
      {...NuevoForm,
      [dato.target.name]:dato.target.value}
    )
  }

  const crearUsuario = (e)=>{
    e.preventDefault()
    const db = getFirestore()
    const queryUsuarios = collection (db,'usuarios')
    const queryEmail = query(queryUsuarios,where('email','==',NuevoForm.email))
    // verificar si el correo utilizado ya existe en la BD
    getDocs(queryEmail)
      .then(
        resp => {
          resp.docs.length === 0 ?
            addDoc(queryUsuarios,NuevoForm)
            .then(loggearUsuario(NuevoForm))
            :
            MySwal.fire({
              title: <strong>ya existe este usuario!</strong>,
              html: <i>por favor revisa tus datos</i>,
              icon: 'warning'})
        }
      ).catch(err => console.log(err))
  }

  return (
    <div className='userContainer'>
        {
          // verifica si hay un usuario loggeado
          usuario ? 
            <UserInfo usuario={usuario} cerrarSesion={cerrarSesion}/>
          :
            // si el usuario cuenta o no con un usuario desplega estas opciones para loggearse.
            registrado ?
              <UserLogin sinCuenta={sinCuenta} loggear={loggear} ingreso={gestionarIngreso} login={login} />
            :
              <UserForm NuevoForm={NuevoForm} enviar={crearUsuario} gestionarCambio={gestionarCambio} sinCuenta={sinCuenta}/>
        }
    </div>
  )
}

export default UserContainer