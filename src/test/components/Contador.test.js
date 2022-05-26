import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import Contador from '../../components/Contador';

describe('Pruebas en el componente <Contador/>', ()=>{

    let wrapper
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<Contador/>)

    })


    test('Probar el botón aumentar del componente', ()=>{

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');


        expect(wrapper.find('#id_valor_variable').text()).toBe('El valor de la variable contador es: 4')
        expect(wrapper.find('#id_condicion').text()).toBe('Es mayor a dos')

    })

    test('Probar el botón decrementar del componente', ()=>{



        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');


        expect(wrapper.find('#id_valor_variable').text()).toBe('El valor de la variable contador es: -4')
        expect(wrapper.find('#id_condicion').text()).toBe('Es menor o igual a dos')

    })

    test('Probar el botón reset del componente', ()=>{


        const wrapper = shallow(<Contador inicial={20}/>)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');


        expect(wrapper.find('#id_valor_variable').text()).toBe('El valor de la variable contador es: 20')
        expect(wrapper.find('#id_condicion').text()).toBe('Es mayor a dos')

    })




})