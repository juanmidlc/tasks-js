<template>
  <section class="CategoryForm">
    <h4 class="CategoryForm__tittle">¡Crea una nueva Categoría!</h4>
    <form class="CategoryForm__form">
      <div class="CategoryForm__field">
        <label class="CategoryForm__label" for="category-name">Dale un nombre a tu nueva categoría: </label>
        <input id="category-name" class="CategoryForm__inputarea" type="text" name="name">
      </div>
      <div class="CategoryForm__field">
        <label class="CategoryForm__label" for="category-description">Colócale una descripción:</label>
        <textarea id="category-description" class="CategoryForm__textarea" name="desctiption" />
      </div>
      <button class="CategoryForm__button" type="button">Crear</button>
    </form>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.CategoryForm {
  background-color: $navypurple;
  &__tittle {
    color: $white;
  }
  &__form {
    display: flex;
    flex-direction: column;
    color: $white;
  }
  &__field {
    display: flex;
    justify-content: center;
  }
  &__label {
    padding: 8px;
    color: $white;
  }
  &__inputarea {
    height: 50%;
    align-self: center;
    border-radius: 100px;
  }
  &__button {
    background-color: $white;
    color: $navypurple;
    width: 20%;
    max-width: 25%;
    align-self: flex-end;
    border-radius: 116px;
    border: 3px solid $navypurple;
  }
}
</style>
