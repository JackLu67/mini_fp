
const state = {
  name: 1
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
   // getToken
   getInfo({ commit, state}) {
    let name = state.name + 1
    commit('SET_NAME', name)
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}