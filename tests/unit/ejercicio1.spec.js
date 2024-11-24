// Ejercicio 1 - Manejo del estado con Vuex
//a) Verificar que el valor inicial del contador es 0
//b) Probar la funcionalidad de incremento y decremento del contador

import { shallowMount } from '@vue/test-utils' // Se usa ShallowMount en vez de Mount ya que se testea un componente sin hijos
import store from '@/store'; // Se importa el estado 
import ContadorView from '@/views/ContadorView.vue';

describe('ContadorView', () => {

    let wrapper; //se usa let porque la declaración 'const' debe inicializarse

    beforeEach(() => {
      //Montaje del objeto de prueba
       wrapper = shallowMount(ContadorView, {
         global: {
            plugins: [store]
         }
       })
    });

  test('Verificar que el valor inicial del contador es 0', () => {
    // Aserción
    // En el componente ContadorView se busca la clase '.valorContador' 
    // luego accedemos  a su contenido con el método .text()
    // y esperamos recibir '0' como valor inicial 
    expect(wrapper.find('.valorContador').text()).toBe('0')   
  })

// Al trabajar con propiedades reactivas el DOM está modificandose constantemente 
// es por esto que es necesario utilizar async y await para esperar que esté disponible la información en el DOM
  test('probar funcionalidad de incremento del contador', async () => {    
    // En el componente ContadorView se busca el botón con la clase '.btnIncrementar' 
    // luego, con .trigger se dispara el evento click para incrementar el contador en 1
    await wrapper.find('.btnIncrementar').trigger('click')    
    // Aserción
    // Se busca la clase '.valorContador' y accedemos  a su contenido con el método .text()
    // Esperamos que  el valor recibido sea '1' 
    expect(wrapper.find('.valorContador').text()).toBe('1')   
  })

  test('probar funcionalidad de decremento del contador', async () => {    
    // En el componente ContadorView se busca el botón con la clase '.btnDisminuir' 
    // luego, con .trigger se dispara el evento click para disminuir en 1 el contador
    await wrapper.find('.btnDisminuir').trigger('click')    
    // Aserción
    // se busca la clase '.valorContador' y accedemos  a su contenido con el método .text(),
    // y esperamos que  el valor recibido sea '0' ya que anteriormente ejecutamos la 
    // prueba para incrementar el contador y el valor de éste quedó en '1' 
    expect(wrapper.find('.valorContador').text()).toBe('0')   
  })
});