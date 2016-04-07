import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const TOGGLE_MENU = 'TOGGLE_MENU',
      TOGGLE_MENU_WIDE = 'TOGGLE_MENU_WIDE';


const state = {
    isMenuOpen: false,
    isMenuWide: false
}

const actions = {
    toggleMenu: TOGGLE_MENU,
    toggleMenuWide: TOGGLE_MENU_WIDE
}

const mutations = {
    [TOGGLE_MENU] (state){
        state.isMenuOpen = !state.isMenuOpen

        if(!state.isMenuOpen)
            state.isMenuWide = false;
    },

    [TOGGLE_MENU_WIDE] (state){
        state.isMenuWide = !state.isMenuWide
    }
}



export default new Vuex.Store({
    state,
    actions,
    mutations
})























