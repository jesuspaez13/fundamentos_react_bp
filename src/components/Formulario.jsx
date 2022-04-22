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
        <div>
            <h2>Venta de vehículos</h2>
            <form onSubmit={guardarDatos}>
                <input
                    type="text"
                    placeholder='Ingrese tipo'
                    onChange={(e)=>setTipo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese estado'
                    onChange={(e)=>setEstado(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese marca'
                    onChange={(e)=>setMarca(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese modelo'
                    onChange={(e)=>setModelo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese cilindraje'
                    onChange={(e)=>setCilindraje(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese color'
                    onChange={(e)=>setColor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese precio'
                    onChange={(e)=>setPrecio(e.target.value)}
                />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index)=> (
                       <li key={index}>
                          <h4>{item.nombreTipo} - {item.nombreEstado} - {item.nombreMarca}
                           - {item.nombreModelo} - {item.nombreCilindraje} - {item.nombreColor}
                           - {item.nombrePrecio}</h4>
                       </li> 
                    ))
                }
            </ul>
        </div>
    )
}
export default Formulario


