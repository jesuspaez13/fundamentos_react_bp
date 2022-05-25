import React from 'react';
import PropTypes from 'prop-types'
const Contador = ({inicial}) => {
    const [contador, setContador] = React.useState(inicial)
    const aumentar = () => setContador(contador + 1)
    const decrementar = () => setContador(contador - 1)
    const resetear = () => setContador(inicial)
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
            <button onClick={resetear}>Resetear</button> 
            <button onClick={decrementar}>Decrementar</button> 
        </>
    )
    
}

Contador.propTypes = {
    inicial: PropTypes.number.isRequired
}

Contador.defaultProps = {
    inicial: 0
}

export default Contador
