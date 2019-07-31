<template>
  <table>
    <task-row
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </table>

</template>
<script>
import { mapState } from 'vuex'
import TaskRow from './TaskRow'
export default {
  components: {
    TaskRow
  },
  data() {
    return {
      task: {}
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.items
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
