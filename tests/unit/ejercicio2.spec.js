// *Ejercicio 2 - Navegación con Vue Router: 
// El objetivo de este ejercicio es validar la existencia de los componentes
// HomeView y AboutView que controlan cada una de las vistas creadas por defecto

import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

describe('HomeView', () => { 
    test('Valida la existencia del componente HomeView ', async () => {
        // Se define la ruta y el componente 
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/',
                name: 'home',
                component: HomeView
            }],
        })
        //Hacemos la redirección con push 
        router.push('/')
        // esperamos que se haga la carga del DOM
        await router.isReady() 
        
        //Montaje del objeto de prueba
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        // Aserción
        //Con 'findComponent' se hace la búsqueda del componente,
        // y luego para validar su existencia, el valor que se espera recibir es 'true'  
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })  

    test('Valida la existencia del componente  AboutView ', async () => {
        // Se define la ruta y el componente 
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'about',
                component: AboutView
            }],
        })
        //Hacemos la redirección con push
        router.push('/about')
        // esperamos que se haga la carga del DOM
        await router.isReady()
        
        //Montaje del objeto de prueba
        const wrapper = mount( AboutView, {
            global: {
                plugins: [router]
            }
        })
        // Aserción
        // Con 'findComponent' se hace la búsqueda del componente
        // y luego para validar su existencia, el valor que se espera recibir es 'true'  
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })   
 
 })