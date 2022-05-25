export function sumar(num1=0, num2=0){
    return num1 + num2;
}

export function edad(anio_nacimiento=2022){
    return 2022 - anio_nacimiento;
}

export function retornar_objeto(){
    return {nombre: 'Jesús', apellido: 'Páez'}
}

export function retornar_array(){
    return ['Jesús', 'Páez']
}

export function es_par(num){
    if(num === 0){
        return 'Es Cero';
    }else if(num %2 === 0){
        return 'Es Par';
    }else{
        return 'Es Impar';
    }
}