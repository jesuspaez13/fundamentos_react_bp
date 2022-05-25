import {sumar, edad, retornar_objeto, es_par, retornar_array} from '../../javascript_base/funciones_secuenciales' 

describe('Tests del archivo funciones_secuenciales',()=>{
    describe('Tests de la funcion sumar',()=>{
        test('Caso de prueba sumar dos números',()=>{
            const num1 = 5;
            const num2 = 6;
        
            expect(sumar(num1, num2)).toBe(11);
        
        })
        
        test('Caso de prueba sumar dos números pero sin pasa uno de ellos',()=>{
            const num1 = 5;
            expect(sumar(num1)).toBe(5);
        })
        
        test('Caso de prueba sumar dos números pero sin pasar ninguno de ellos',()=>{
            expect(sumar()).toBe(0);
        })
    })

    describe('Tests de la funcion edad',()=>{
        test('Caso de prueba edad pasando todos los parámetros',()=>{
            const anio=1999;
            expect(edad(anio)).toBe(23);
        })
        
        test('Caso de prueba edad sin pasar parámetros',()=>{
            expect(edad()).toBe(0);
        })
    })

    describe('Tests de la funcion retornar_objeto',()=>{
        test('Retornar un objeto',()=>{
            const objeto={nombre:'Jesús', apellido: 'Páez'};
            expect(retornar_objeto()).toEqual(objeto);
        })
    })

    describe('Tests de la funcion retornar_array',()=>{
        test('Retornar un objeto',()=>{
            const array=['Jesús', 'Páez'];
            expect(retornar_array()).toEqual(array);
        })
    })

    describe('Tests de la funcion par',()=>{
        test('Dar un número par',()=>{
            const respuesta='Es Par';
            expect(es_par(4)).toBe(respuesta);
        })

        test('Dar un número impar',()=>{
            const respuesta='Es Impar';
            expect(es_par(5)).toBe(respuesta);
        })

        test('Dar número cero',()=>{
            const respuesta='Es Cero';
            expect(es_par(0)).toBe(respuesta);
        })
    })
})