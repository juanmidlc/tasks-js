<template>
  <section class="SessionForm">
    <h4>¡Crea una sesión de trabajo nueva!</h4>
    <form class="SessionForm__form">
      <div class="SessionForm__field">
        <label class="SessionForm__label" for="session-description">Dale una descripción a tu nueva sesión:</label>
        <textarea id="session-description" name="description" />
      </div>
      <div class="SessionForm__field">
        <label class="SessionForm__label"> ¿Cuándo empezarás?</label>
        <input class="SessionForm__inputarea" type="time">
        <input class="SessionForm__inputarea" type="date">
      </div>
      <div class="SessionForm__field">
        <label class="SessionForm__label">¿Cuándo terminarás?</label>
        <input class="SessionForm__inputarea" type="time">
        <input class="SessionForm__inputarea" type="date">
      </div>
      <button class="SessionForm__button" type="button">Crear</button>
    </form>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
section {
  background-color: $white;
  border: 1px solid $navypurple;
}
.SessionForm {
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
  &__inputarea {
    height: 60%;
    align-self: center;
    border-radius: 100px;
  }
  &__button {
    background-color: $navypurple;
    color: $black;
    width: 20%;
    max-width: 25%;
    align-self: flex-end;
    border-radius: 116px;
    border: 3px solid $navypurple;
  }
}
</style>
