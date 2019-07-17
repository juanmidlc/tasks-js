export const state = () => ({
  loading: false,
  items: [],
  current: null,
  errors: null
})

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },

  setSessions(state, sessions) {
    state.items = sessions
  },

  setSession(state, session) {
    state.current = session
  },

  setErrors(state, errors) {
    state.errors = errors
  },

  reset(state) {
    state.loading = false
    state.items = []
  }
}

export const actions = {
  async fetch({ commit }) {
    commit('setLoading', true)

    const { data } = await this.$axios.get('http://localhost:3000/sessions')

    commit('setSessions', data)
    commit('setLoading', false)
  },

  async create({ commit }, session) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.post('http://localhost:3000/sessions', {
        session
      })

      commit('setSession', data)
    } catch ({ data }) {
      commit('setErrors', data.errors)
    } finally {
      commit('setLoading', false)
    }
  }
}
