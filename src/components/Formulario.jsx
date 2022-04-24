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
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)
    
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

        if(!tipo.trim()){
            setError('Campo tipo vacío')
            return
        }

        if(!estado.trim()){
            setError('Campo estado vacío')
            return
        }

        if(!marca.trim()){
            setError('Campo marca vacío')
            return
        }

        if(!modelo.trim()){
            setError('Campo modelo vacío')
            return
        }

        if(!cilindraje.trim()){
            setError('Campo color vacío')
            return
        }

        if(!color.trim()){
            setError('Campo color vacío')
            return
        }

        if(!precio.trim()){
            setError('Campo precio vacío')
            return
        }

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

        setModoEdicion(false)
        setTipo('')
        setEstado('')
        setMarca('')
        setModelo('')
        setCilindraje('')
        setColor('')
        setPrecio('')
        setError(null)
       
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

    const auxEditar = (item) =>{
        setTipo(item.nombreTipo)
        setPrecio(item.nombrePrecio)
        setModelo(item.nombreModelo)
        setMarca(item.nombreMarca)
        setEstado(item.nombreEstado)
        setColor(item.nombreColor)
        setCilindraje(item.nombreCilindraje)
        setModoEdicion(true)
        setId(item.id)
    }

    const editar = async e =>{
        e.preventDefault()
        if(!tipo.trim()){
            setError('Campo tipo vacío')
            return
        }

        if(!estado.trim()){
            setError('Campo estado vacío')
            return
        }

        if(!marca.trim()){
            setError('Campo marca vacío')
            return
        }

        if(!modelo.trim()){
            setError('Campo modelo vacío')
            return
        }

        if(!cilindraje.trim()){
            setError('Campo color vacío')
            return
        }

        if(!color.trim()){
            setError('Campo color vacío')
            return
        }

        if(!precio.trim()){
            setError('Campo precio vacío')
            return
        }
        try{
            const db = firebase.firestore()
            await db.collection('vehiculos').doc(id).update({
                nombreTipo:tipo,
                nombrePrecio:precio,
                nombreModelo:modelo,
                nombreMarca:marca,
                nombreEstado:estado,
                nombreColor:color,
                nombreCilindraje:cilindraje
            })
            
        }catch(error){
            console.log(error)
        }
        setTipo('')
        setEstado('')
        setMarca('')
        setModelo('')
        setCilindraje('')
        setColor('')
        setPrecio('')
        setModoEdicion(false)
        setError(null)
        
    }

    const cancelar =() =>{
        setTipo('')
        setEstado('')
        setMarca('')
        setModelo('')
        setCilindraje('')
        setColor('')
        setPrecio('')
        setModoEdicion(false)
        setError(null)
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
                            <button className='btn-warning btn-sm float-end mx-2'onClick={()=> auxEditar(item)}>Editar</button>
                        </li> 
                        ))
                    }
                </div>
                <div className="col-4">
                    <h4 className="text-center">
                    {
                        modoEdicion ? 'Editar vehículo': 'Agregar vehículo'
                    }</h4>
                    <form onSubmit={modoEdicion ? editar: guardarDatos}>
                        {
                            error ? <span className='text-danger'>{error}</span> : null
                        }
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese tipo'
                            onChange={(e)=>setTipo(e.target.value)}
                            value = {tipo}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese estado'
                            onChange={(e)=>setEstado(e.target.value)}
                            value = {estado}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese marca'
                            onChange={(e)=>setMarca(e.target.value)}
                            value = {marca}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese modelo'
                            onChange={(e)=>setModelo(e.target.value)}
                            value = {modelo}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese cilindraje'
                            onChange={(e)=>setCilindraje(e.target.value)}
                            value = {cilindraje}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese color'
                            onChange={(e)=>setColor(e.target.value)}
                            value = {color}
                        />
                        <input
                            className='form-control mb-2'
                            type="text"
                            placeholder='Ingrese precio'
                            onChange={(e)=>setPrecio(e.target.value)}
                            value = {precio}
                        />{
                            !modoEdicion ? (
                                <button className='btn btn-primary btn-block'type='submit'>Agregar</button>
                            )
                            :
                            ( <>
                            <button className='btn btn-warning btn-block'type='submit'>Editar</button>
                            <button className='btn btn-dark btn-block mx-2'onClick={() => cancelar()}>Cancelar</button>
                            </>
                            )
                        }
                        
                     </form>
                </div>
            </div>  
        </div>
    )
}
export default Formulario


