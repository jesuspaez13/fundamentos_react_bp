import React from 'react'
import {firebase} from '../firebase'
import {nanoid} from 'nanoid'

const Formulario = () => {
    const[tipo, setTipo] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [marca, setMarca] = React.useState('')
    const [modelo, setModelo] = React.useState('')
    const [cilindraje, setCilindraje] = React.useState('')
    const [color, setColor] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const [lista, setLista] = React.useState([])
    //const [id, setId] = React.useState('')
    
    
    React.useEffect(()=>{
        const obtenerDatos = async () =>{
            try{
                const db = firebase.firestore()
                const data = await db.collection('vehiculos').get()
                console.log(data)
                const array = data.docs.map(item =>(
                    {
                        id:item.id, ...item.data()
                    }
                ))
                setLista(array)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos()
    })

    const guardarDatos = async(e) => {
        e.preventDefault()
        try{
            const db = firebase.firestore()
            const nuevoVehiculo = {
                nombreTipo:tipo,
                nombrePrecio:precio,
                nombreModelo:modelo,
                nombreMarca:marca,
                nombreEstado:estado,
                nombreColor:color,
                nombreCilindraje:cilindraje
            }
            await db.collection('vehiculos').add(nuevoVehiculo)
            setLista([...lista,
                {id:nanoid(), nombreTipo: tipo, nombreEstado: estado, nombreMarca: marca, nombreModelo: modelo,
                nombreCilindraje: cilindraje, nombreColor: color, nombrePrecio: precio}
            ])
        }catch(error){
            console.log(error)
        }
       
    }

    const eliminar = async (id) =>{
        try{
            const db = firebase.firestore()
            await db.collection('vehiculos').doc(id).delete()
            const aux = lista.filter(item => item.id !== id)
            setLista(aux)
        }catch(error){
            console.log(error)
        }
    }

    
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Venta de vehículos</h1>
            <hr/>
            <div className='row'>
                <div className="col-8">
                    <h4 className="text-center">Listado de vehículos</h4>
                    <ul className="list-group"></ul>
                    {
                        lista.map((item)=> (
                        <li className='list-group-item'key={item.id}>
                            <span className='lead'>{item.nombreTipo} - {item.nombreEstado} - {item.nombreMarca}
                            - {item.nombreModelo} - {item.nombreCilindraje} - {item.nombreColor}
                            - {item.nombrePrecio}</span>
                            <button className='btn-danger btn-sm float-end mx-2'onClick={()=> eliminar(item.id)}>Eliminar</button>
                            <button className='btn-warning btn-sm float-end mx-2'>Editar</button>
                        </li> 
                        ))
                    }
                </div>
                <div className="col-4">
                    <h4 className="text-center">Agregar vehículo</h4>
                    <form onSubmit={guardarDatos}>
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese tipo'
                            onChange={(e)=>setTipo(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese estado'
                            onChange={(e)=>setEstado(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese marca'
                            onChange={(e)=>setMarca(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese modelo'
                            onChange={(e)=>setModelo(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese cilindraje'
                            onChange={(e)=>setCilindraje(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese color'
                            onChange={(e)=>setColor(e.target.value)}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese precio'
                            onChange={(e)=>setPrecio(e.target.value)}
                        />
                        <button className='btn btn-primary btn-block'type='submit'>Agregar</button>
                     </form>
                </div>
            </div>  
        </div>
    )
}
export default Formulario


