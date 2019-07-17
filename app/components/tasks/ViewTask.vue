<template>
  <section class="ViewTaskForm">
    <form
    class="ViewTaskForm__form">
      <section>
        <h2>Tarea de ahora</h2>
      </section>
      <section>
        <h4>Tareas</h4>
        <h6>Hoy:</h6>
        <div class="ViewTaskForm__field">
          <ul>
            <li
              v-for="task in tasks"
              v-bind:key="task.id">
              {{ task.name }} {{ task.expires_at }}
            </li>
          </ul>
        </div>
        <article>
          <h6>Mañana:</h6>
          <div class="ViewTaskForm__field">
          <ul>
            <li
              v-for="task in tasks"
              v-bind:key="task.id">
              {{ task.name }} {{ task.expires_at }}
            </li>
          </ul>
        </div>
        </article>
      </section>
    </form>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
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
.ViewTaskForm {
  background-color: $white;
  border: 1px solid $navypurple;
  color: $hanpurple;
 &__form {
    display: flex;
    flex-direction: column;
  }
  &__field {
    display: flex;
    justify-content: flex-start;
    padding-left: 10%;
  }
}
</style>
