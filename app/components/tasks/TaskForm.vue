<template>
  <section class="TaskForm">
    <form
      class="TaskForm__form"
      @submit.prevent="save"
      novalidate>
      <div class="TaskForm__field">
        <label
          class="TaskForm__label"
          for="task-name">
          Nombre:
        </label>
        <input
          id="task-name"
          v-model="task.name"
          class="TaskForm__input"
          type="text"
          name="name">
      </div>
      <div
        class="TaskForm__field">
        <label
          class="TaskForm__label"
          for="task-description">
          Dale una descripción a tu nueva tarea:
        </label>
        <textarea
          id="task-description"
          v-model="task.description"
          class="TaskForm__textarea"
          name="description" />
      </div>
      <div
        class="TaskForm__field">
        <label
          class="TaskForm__label">
          Ahora dale una prioridad :O :
        </label>
        <select
          v-model="task.priority"
          class="TaskForm__select">
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>
      </div>
      <div
        class="TaskForm__field">
        <label
          class="TaskForm__label">
          ¡Es hora que le des un color a tu nueva tarea! :
          </label>
        <input
          v-model="task.color"
          class="TaskForm__color"
          type="color">
      </div>
 <!--     <div
        class="TaskForm__field">
        <label
          class="TaskForm__label">
          ¿Cuándo terminará tu tarea?
        </label>
        <input
          class="TaskForm__date"
          v-model="task.date"
          type="date">
      </div> -->
      <div
        class="TaskForm__field">
        <label
          class="TaskForm__label">
          ¿A qué categoría pertenece tu tarea?
        </label>
        <select
          v-model="task.category_id"
          class="TaskForm__select">
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
   <!--<div class="TaskForm__field">
        <label class="TaskForm__label">¿A qué sesión pertenece tu tarea?</label>
        <select
          v-model="sessions"
          class="TaskForm__select">
          <option
            v-for="session in sessions"
            :key="session.id"
            :value="session.id">
            {{ session.description }}
          </option>
        </select>
      </div> -->
      <div class="TaskForm__buttons">
        <input class="TaskForm__button" type="submit" value="Cancelar"/>
        <input class="TaskForm__button" type="submit" value="Guardar"/>
      </div>
    </form>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      task: {
      }
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.items,
      sessions: state => state.sessions.items
    })
  },
  methods: {
    async save() {
      await this.$store.dispatch('tasks/create', this.task)
    }
  }
}
</script>
<style lang="scss" scoped>
.TaskForm {
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
  }
  &__label {
    padding: 8px;
  }
  &__input {
    height: 50%;
    align-self: center;
    border-radius: 100px;
  }
  &__textarea {
    align-self: center;
  }
  &__select {
    height: 60%;
    align-self: center;
    border-radius: 60px;
  }
  &__color {
    align-self: center;
  }
  &__date{
    height: 60%;
    align-self: center;
    border-radius: 70px;
  }
  &__button {
    @include button($navypurple, $white);
    width: 20%;
    max-width: 25%;
  }
  &__buttons {
    display: flex;
    justify-content:flex-end;
  }
}
</style>
