import Vue from 'vue'
import Vuex from 'vuex'
import testStore from '../components/testStore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test: 'MyTest1'
    },
    getters: {
        TEST: state => state.test,
    },
    mutations: {},
    actions: {},
    modules: {
        testStore
    },
});