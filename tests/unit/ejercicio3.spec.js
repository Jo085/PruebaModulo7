// Ejercicio 3 - Comunicación entre componentes:
// Objetivo: validar que al dar clic sobre el botón del componente Child, se envíe algún texto.
import { mount } from '@vue/test-utils'
import Child from '@/components/Child.vue'
import Parent from '@/components/Parent.vue';

describe('Parent Component & Child Component', () => {

    test('Validar envío de texto del hijo al padre', async () => {
        // Montamos el componente Parent
        const wrapper = mount(Parent)
        //Buscamos el componente Child en Parent y lo guardamos en una variable
        const wrapperChild = wrapper.findComponent(Child)
        // Dentro del componente Child buscamos el elemento input e introducimos un valor      
        await wrapperChild.find('input').setValue('Nuevo texto enviado al padre')
        // Luego en el botón de éste componente disparamos el evento click que envía el texto al padre 
        await wrapperChild.find('button').trigger('click')
        //*Con el método nextTick() esperamos que se actualice el DOM 
        await wrapper.vm.$nextTick() 
        // Aserción
        // En el componente Parent se busca la etiqueta 'span' y accedemos  a su contenido con el método .text(),
        // Validamos que el padre haya recibido el texto enviado desde el hijo       
        expect(wrapper.find('span').text()).toBe('Nuevo texto enviado al padre') 
        })
       
});

