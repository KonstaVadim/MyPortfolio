import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinks: {
            'main': {
                name: 'ГЛАВНАЯ СТРАНИЦА',
                url: '/'
            },
            'about': {
                name: 'ОБО МНЕ',
                url: '/about-me'
            },
            'portfolio': {
                name: 'ПОРТФОЛИО',
                url: '/portfolio'
            },
            'yclygi': {
                name: 'УСЛУГИ',
                url: '/services'
            },
            'contacts': {
                name: 'КОНТАКТЫ',
                url: '/contacts'
            }
        },                                // Список ссылок
        socialsLink: [
            {
                name: 'vk',
                url: 'https://vk.com/c0nsta'
            },
            {
                name: 'instagram',
                url: 'https://www.instagram.com/consta_v2.0'
            },
            {
                name: 'telegram',
                url: 'https://t.me/consta_v'
            },
            {
                name: 'whatsapp',
                url: 'https://wa.me/79963327071'
            },
        ],                                // Список ссылок
    },
    getters: {
        NAVLINKS: state => state.navLinks,  // Список ссылок
        SOCIALSLINK: state => state.socialsLink,  // Список ссылок
    },
    mutations: {
        
    },
    actions: {},
});