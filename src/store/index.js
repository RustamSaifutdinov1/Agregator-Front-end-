import Vue from 'vue'
import Vuex from 'vuex'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from "@/App";

//Vue.use(Vuex)


const store = createStore({
    state:{
        backendUrl : 'http://127.0.0.1:8000/api/v1'
    },
    mutations:{},
    actions:{},
    modules:{},
    getters:{
        getServerUrl: state => {
            return state.backendUrl
        }
    },
})

export default store