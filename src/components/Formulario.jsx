import React from 'react'

const Formulario = () => {
    const[tipo, setTipo] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [marca, setMarca] = React.useState('')
    const [modelo, setModelo] = React.useState('')
    const [cilindraje, setCilindraje] = React.useState('')
    const [color, setColor] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        setLista([...lista,
            {nombreTipo: tipo, nombreEstado: estado, nombreMarca: marca, nombreModelo: modelo,
            nombreCilindraje: cilindraje, nombreColor: color, nombrePrecio: precio}
        ])
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
                        lista.map((item, index)=> (
                        <li className='list-group-item'key={index}>
                            <span className='lead'>{item.nombreTipo} - {item.nombreEstado} - {item.nombreMarca}
                            - {item.nombreModelo} - {item.nombreCilindraje} - {item.nombreColor}
                            - {item.nombrePrecio}</span>
                            <button className='btn-danger btn-sm float-end mx-2'>Eliminar</button>
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


