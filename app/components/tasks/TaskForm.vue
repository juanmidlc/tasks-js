<template>
  <section class="TaskForm">
    <h4>¡Crea una nueva tarea!</h4>
    <form class="TaskForm__form">
      <div class="TaskForm__field">
        <label class="TaskForm__label" for="task-name">Nombre: </label>
        <input id="task-name" class="TaskForm__input" type="text" name="name">
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label" for="task-description">Dale una descripción a tu nueva tarea: </label>
        <textarea id="task-description" class="TaskForm__textarea" name="description" />
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label">Ahora dale una prioridad :O :</label>
        <select class="TaskForm__select">
          <option>Alta :O</option>
          <option>Media :)</option>
          <option>Baja :(</option>
        </select>
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label">¡Es hora que le des un color a tu nueva tarea! : </label>
        <input class="TaskForm__color" type="color">
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label">¿Cuándo terminará tu tarea?</label>
        <input class="TaskForm__date" type="date">
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label">¿A qué categoría pertenece tu tarea?</label>
        <select class="TaskForm__select">
          <option>Alta :O</option>
          <option>Media :)</option>
          <option>Baja :(</option>
        </select>
      </div>
      <div class="TaskForm__field">
        <label class="TaskForm__label">¿A qué sesión pertenece tu tarea?</label>
        <select class="TaskForm__select">
          <option>Alta :O</option>
          <option>Media :)</option>
          <option>Baja :(</option>
        </select>
      </div>
      <button class="TaskForm__button" type="button">Crear</button>
    </form>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.TaskForm {
  background-color: $quicksilver;
  color: $hanpurple;
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__field {
    display: flex;
    justify-content: center;
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
    background-color: $hanpurple;
    color: $black;
    width: 20%;
    max-width: 25%;
    align-self: flex-end;
    border-radius: 116px;
    border: 3px solid $navypurple;
  }
}
</style>
