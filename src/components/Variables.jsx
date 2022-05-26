
const Variables= ()=>{
const saludo = "Hello world"
const imagen = 'https://picsum.photos/300'
const texto_alternativo = 'This is picsum image'
    return(
        <>
            <h2 id='saludo'>{saludo}</h2>
            <img src={imagen} alt = {texto_alternativo}/>
        </>

    )
}

export default Variables