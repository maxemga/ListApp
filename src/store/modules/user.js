export default {
  state: {
    user: {},
    token: '',
  },
  mutations: {
    setAuth(state, { user, token } = {}) {
      state.user = user
      state.token = token

      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('user', JSON.stringify(user))
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    token(state) {
      return state.token
    },
  },
}
