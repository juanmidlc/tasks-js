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

  setCategories(state, categories) {
    state.items = categories
  },

  setCategory(state, category) {
    state.current = category
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

    const { data } = await this.$axios.get('http://localhost:3000/categories')

    commit('setCategories', data)
    commit('setLoading', false)
  },

  async create({ commit }, category) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.post('http://localhost:3000/categories', {
        category // category: category
      })

      commit('setCategory', data)
    } catch ({ data }) {
      commit('setErrors', data.errors)
    } finally {
      commit('setLoading', false)
    }
  }
}
