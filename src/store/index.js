import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinks: {
            0: {
                name: 'ГЛАВНАЯ СТРАНИЦА',
                url: ''
            },
            1: {
                name: 'ОБО МНЕ',
                url: 'about-me'
            },
            2: {
                name: 'ПОРТФОЛИО',
                url: 'portfolio'
            },
            3: {
                name: 'УСЛУГИ',
                url: 'services'
            },
            4: {
                name: 'КОНТАКТЫ',
                url: 'contacts'
            }
        }                                // Список ссылок
    },
    getters: {
        NAVLINKS: state => state.navLinks,  // Список ссылок
    },
    mutations: {
        
    },
    actions: {},
});