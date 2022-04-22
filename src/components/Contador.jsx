import React from 'react';
const Contador = () => {
    const [contador, setContador] = React.useState(0)
    const aumentar = () => setContador(contador + 1)
    const decrementar = () => setContador(contador - 1)
    return(
        <>
        <hr/>
            <h2>Contador</h2>
            <h3>El valor de la variable contador es: {contador}</h3>
            <h3>
                {
                    contador > 2 ? 'Es mayor a dos': 'Es menor o igual a dos'
                }
            </h3>
            <button onClick={aumentar}>Aumentar</button> 
            <button onClick={decrementar}>Decrementar</button> 
    
        </>
    )
    
}

export default Contador
