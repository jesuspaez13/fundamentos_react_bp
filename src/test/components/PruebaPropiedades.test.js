import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import PruebaPropiedades from '../../components/PruebaPropiedades';

describe('Pruebas en el componente <Prueba Propiedades/>', ()=>{
    test('Probar el estado por defecto del componente', ()=>{

        const wrapper = shallow(<PruebaPropiedades/>)

        expect(wrapper.find('h1').text()).toBe('TÍTULO POR DEFECTO')
        expect(wrapper.find('h2').text()).toBe('CUERPO POR DEFECTO')
        expect(wrapper.find('h3').text()).toBe('5')

    })

    test('Probar pasando un parámetro al componente', ()=>{

        const wrapper = shallow(<PruebaPropiedades titulo='Hola Mundo'/>)

        expect(wrapper.find('h1').text()).toBe('Hola Mundo')
        expect(wrapper.find('h2').text()).toBe('CUERPO POR DEFECTO')
        expect(wrapper.find('h3').text()).toBe('5')

    })


})