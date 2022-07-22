import React, { Fragment, useState } from 'react';

const Formulario = ()=>{
    //Crear State de citas
    const[cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:'',
    }) 
    const[error, actualizarError] = useState(false)

    //Funcion que se ejecuta cuando el usuario escribe en el input
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    
    const{mascota,propietario,fecha,hora,sintomas}= cita
   //Cuando el usuario presione agregar cita 
    const submitCita = e =>{
        e.preventDefault();
        console.log('enviando formulario')

        
        //validar
        if(mascota.trim()===''|| propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
            actualizarError(true)
            return
        }
        //asignar ID
        console.log(cita)
        //crear la cita
        //reiniciar el formulario
    }
    
    return(
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'>rellene todos los campos</p>:null}
            <form onSubmit={submitCita}>
            
                <label>Nombre de la Mascota</label>
                <input type= "text" name="mascota" className='u-full-width' placeholder='Nombre Mascota' onChange={actualizarState} value={mascota}/>
            

                <label>Propietario</label>
                <input type= "text" name="propietario" className='u-full-width' placeholder='Nombre del dueño de la mascota' onChange={actualizarState} value={propietario}/>
            

                <label>Fecha</label>
                <input type= "date" name="fecha" className='u-full-width' onChange={actualizarState} value={fecha}/>

                <label>Hora</label>
                <input type= "time" name="hora" className='u-full-width' onChange={actualizarState} value={hora}/>

                <label>Sintomas</label>
                <textarea  className='u-full-width' name='sintomas' onChange={actualizarState} value={sintomas}></textarea>
                
                <button type='submit' className='u-full-width button-primary'>Agregar cita</button>

            </form>
        </Fragment>
    )
}

export default Formulario;