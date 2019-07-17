<template>
  <section class="ProfileForm">
    <h4>¡Crea tu perfil!</h4>
    <form
      class="ProfileForm__form"
      @submit.prevent="save"
      novalidate>
      <div class="ProfileForm__field">
        <label
          class="ProfileForm__label"
          for="profile-name">
          Ingresa tu nombre:
        </label>
        <input
          id="profile-name"
          v-model="profile.name"
          class="ProfileForm__input"
          type="text"
          name="name">
      </div>
      <div
        class="ProfileForm__field">
        <label
          class="ProfileForm__label"
          for="age">
          Ingresa tu edad:
        </label>
        <input
          id="age"
          v-model="profile.age"
          class="ProfileForm__input_age"
          type="text">
        <label
          class="ProfileForm__label"> años
        </label>
      </div>
      <div
        class="ProfileForm__field">
        <label
          class="ProfileForm__label">
          Elige tu ocupación:
        </label>
        <select
          v-model="profile.occupation"
          class="ProfileForm__select">
          <option>student</option>
          <option>student_employee</option>
          <option>employee</option>
        |</select>
      </div>
      <div
        class="ProfileForm__field">
        <label
          class="ProfileForm__label"
          for="username">
          Escribe tu username:
        </label>
        <input
          id="username"
          v-model="profile.user"
          class="ProfileForm__input_user"
          type="text">
      </div>
      <div
        class="ProfileForm__field">
        <label
          class="ProfileForm__label"
          for="password">
          Dale un password a tu perfil:
        </label>
        <input
          id="password"
          v-model="profile.password"
          class="ProfileForm__input"
          type="text">
      </div>
   <!--   <div
        class="ProfileForm__field">
        <label
          class="ProfileForm__label"
          for="confirm-pass">
          Por favor confirma tu password:
        </label>
        <input
          id="confirm-pass"
          v-model="profile.confirmpass"
          class="ProfileForm__input"
          type="text">
      </div> -->
      <input class="ProfileForm__button" type="submit" value="Crear"/>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      profile: {
      }
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('profiles/create', {
        ...this.profile, start_at: '15:54:33', finish_at: '18:58:32'
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.ProfileForm {
  background-color: $navypurple;
  color: $accent-3;
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
  &__input_user{
    width: 10%;
    height: 50%;
    align-self: center;
    border-radius: 100px;
  }
  &__input_age {
    height: 50%;
    width: 2%;
    align-self: center;
    border-radius:75px;
  }
  &__select {
    height: 60%;
    align-self: center;
    border-radius: 30px;
  }
  &__button {
    background-color: $accent-3;
    color: $black;
    width: 20%;
    max-width: 25%;
    align-self: flex-end;
    border-radius: 116px;
    border: 3px solid $accent-3;
  }
}
</style>
