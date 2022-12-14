import React, { Fragment, useEffect, useState } from 'react'
import Formulario from "./components/Formulario";
import Cita from './components/Cita'

function App() {

  //Citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
  }
  //arreglo de citas

  const [citas, guardarCitas] = useState(citasIniciales);

  //use effect
  
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ])
    console.log(cita)
  }

  //funcion eliminar boton
  const eliminarCita = id =>{
    console.log("Cita Eliminada " + id)
    const nuevaCitas = citas.filter(cita => cita.id !== id )
    guardarCitas(nuevaCitas)
  }

  //cuando no hay citas mostrar agregar nueva cita
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas"
  return (
    <Fragment>
        <h2>Administrador de Pacientes</h2>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
              crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
        </Fragment>
  );
}

export default App;
