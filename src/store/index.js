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
        },                                // Список ссылок
        socialsLink: {
            0: {
                name: 'VK',
                url: 'vk.png'
            },
            1: {
                name: 'INSTAGRAM',
                url: 'facebook.png'
            },
            2: {
                name: 'FACEBOOK',
                url: 'instagram.png'
            },
        },                                // Список ссылок
    },
    getters: {
        NAVLINKS: state => state.navLinks,  // Список ссылок
        SOCIALSLINK: state => state.socialsLink,  // Список ссылок
    },
    mutations: {
        
    },
    actions: {},
});