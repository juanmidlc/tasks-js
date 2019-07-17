<template>
  <section class="CategoryForm">
    <h4 class="CategoryForm__tittle">
      ¡Crea una nueva Categoría!
    </h4>
    <form
      class="CategoryForm__form"
      @submit.prevent="save"
      novalidate>
      <div class="CategoryForm__field">
        <label
          class="CategoryForm__label"
          for="category-name">
          Dale un nombre a tu nueva categoría:
        </label>
        <input
          id="category-name"
          v-model="category.name"
          class="CategoryForm__inputarea"
          type="text"
          name="name">
      </div>
      <div class="CategoryForm__field">
        <label class="CategoryForm__label" for="category-description">Colócale una descripción:</label>
        <textarea
          id="category-description"
          v-model="category.description"
          class="CategoryForm__textarea"
          name="desctiption" />
      </div>
      <input class="CategoryForm__button" type="submit" value="Crear"/>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      category: {}
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('categories/create', this.category)
    }
  }
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
    @include button($white, $navypurple);

    width: 20%;
    max-width: 25%;
    align-self: flex-end;
  }
}
</style>
