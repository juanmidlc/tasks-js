<template>
  <div class="container">
    <section class="TaskForm">
      <form
        novalidate
        @submit.prevent="save">
        <label class="TaskForm__tittle">Nueva Tarea</label>
        <br>
        <div class="TaskForm__div">
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
        <br>
        <div class="TaskForm__div">
          <label
            class="TaskForm__label"
            for="task-description">
            Descripción:
          </label>
          <input
            id="task-description"
            v-model="task.description"
            class="TaskForm__input"
            name="description" />
        </div>
        <br>
        <div class="TaskForm__div">
          <label
            class="TaskForm__label">
            ¿A qué categoría pertenece?
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
        <br>
        <div class="TaskForm__div">
          <label
            class="TaskForm__label">
            ¿Qué prioridad tiene tu tarea?
          </label>
          <select
            v-model="task.priority"
            class="TaskForm__select">
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <br>
        <div class="TaskForm__div">
          <label
            class="TaskForm__label"
            for="task-startat">
            Dale una hora de inicio:
          </label>
          <input
            id="task-startat"
            v-model="task.start_at"
            class="TaskForm__input"
            type="text"
            name="star_at">
        </div>
        <br>
        <div class="TaskForm__div">
          <label
            class="TaskForm__label"
            for="task-color">
            Elige un color para tu tarea:
          </label>
          <input
            id="task-color"
            v-model="task.color"
            class="TaskForm__input"
            type="color"
            name="color">
        </div>
        <br>
        <div>
          <button class="TaskForm__button" type="button">Cancelar</button>
          <button class="TaskForm__button-2" type="submit">Guardar</button>
      </div>
      </form>
    </section>
  </div>
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
      categories: state => state.categories.items
    })
  },
  methods: {
    async save() {
      try {
        await this.$store.dispatch('tasks/create', this.task)
        this.$emit('saved')
      } catch {
        window.showDialog('Ha ocurrido un error')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.TaskForm {
  background-color: #FFFFFF;

  &__tittle {
    color: #8650FF;
    font-family: 'RNS Sanz, ExtraBold';
    font-size: 24px;
  }
  &__label {
    color: #514A66;
    font-family: 'RNS Sanz, ExtraBold';
    font-size: 18px;
  }
  &__div {
    display: flex;
    flex-direction: column;
  }
  &__button {
    width: 80px;
    height: 30px;
    border-radius: 25px;
    background-color: transparent;
    border: 1px solid #8E8D92;
}
  &__button-2 {
    width: 80px;
    height: 30px;
    border-radius: 25px;
    background-color: #651FFF;
    color: #F8F9FB;
    border: none;
}
}
input, select {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #707070;
}
form {
  padding: 30px 60px;
  box-shadow: 0px 4px 10px;
  border-radius: 12px;

}
</style>
