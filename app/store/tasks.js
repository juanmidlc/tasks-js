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

  setTasks(state, tasks) {
    state.items = tasks
  },

  setTask(state, task) {
    state.current = task
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

    const { data } = await this.$axios.get('http://localhost:3000/tasks')

    commit('setTasks', data)
    commit('setLoading', false)
  },

  async create({ commit }, task) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.post('http://localhost:3000/tasks', {
        task // category: category
      })

      commit('setTask', data)
    } catch ({ data }) {
      commit('setErrors', data.errors)
    } finally {
      commit('setLoading', false)
    }
  }
}
