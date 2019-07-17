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

  setProfiles(state, profiles) {
    state.items = profiles
  },

  setProfile(state, profile) {
    state.current = profile
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

    const { data } = await this.$axios.get('http://localhost:3000/profiles')

    commit('setProfiles', data)
    commit('setLoading', false)
  },

  async create({ commit }, profile) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.post('http://localhost:3000/profiles', {
        profile // category: category
      })

      commit('setProfile', data)
    } catch ({ data }) {
      commit('setErrors', data.errors)
    } finally {
      commit('setLoading', false)
    }
  }
}
