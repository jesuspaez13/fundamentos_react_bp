import {shallow} from 'enzyme'
import Variables from '../../components/Variables';
import '@testing-library/jest-dom'

describe('Pruebas en el componente <Variables/>', ()=>{
    test('Probar que el componente tenga un h2 con el saludo hola mundo', ()=>{
        const saludo = 'Hola Mundo';
        const wrapper = shallow(<Variables/>)
        const saludo_renderizado = wrapper.find('h2').text();

        expect(saludo_renderizado).toBe(saludo)

    })

    test('Probar que el componente tenga una imagen llamando al api de picsum', ()=>{
        const src_imagen = 'https://picsum.photos/300'
        const wrapper = shallow(<Variables/>)
        const imagen_renderizada = wrapper.find('img');

        expect(imagen_renderizada.prop('src')).toBe(src_imagen)

    })

    test('Probar que el componente no tenga una imagen vacía', ()=>{
        const src_imagen = 'https://picsum.photos/300'
        const wrapper = shallow(<Variables/>)
        const imagen_renderizada = wrapper.find('img');

        expect(imagen_renderizada.prop('src')).not.toBe('')

    })
})