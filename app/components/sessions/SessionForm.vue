<template>
  <section class="SessionForm">
    <h4>
      ¡Crea una sesión de trabajo nueva!
    </h4>
    <form
      class="SessionForm__form"
      @submit.prevent="save"
      novalidate>
      <div class="SessionForm__field">
        <label
          class="SessionForm__label"
          for="session-description">
          Dale una descripción a tu nueva sesión:
        </label>
        <textarea
          id="session-description"
          name="description"
          v-model="session.description"
        />
      </div>
      <div class="SessionForm__field">
        <label
          class="SessionForm__label">
          ¿Cuándo empezarás?
        </label>
        <input
          class="SessionForm__inputarea"
          v-model="session.init_time"
          type="time">
        <input
          class="SessionForm__inputarea"
          v-model="session.init_date"
          type="date">
      </div>
      <div class="SessionForm__field">
        <label
          class="SessionForm__label">
          ¿Cuándo terminarás?
        </label>
        <input
          class="SessionForm__inputarea"
          v-model="session.finish_time"
          type="time">
        <input
          class="SessionForm__inputarea"
          v-model="session.finish_date"
          type="date">
      </div>
      <input class="SessionForm__button" type="submit" value="Crear"/>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      session: {
        finished: false,
        session_duration: 1
      }
    }
  },
  computed: {
    startDate() {
      return `${this.session.init_date} ${this.session.init_time}`
    },
    expireDate() {
      return `${this.session.finish_date} ${this.session.finish_time}`
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('sessions/create', {
        ...this.session,
        start_at: this.startDate,
        expires_at: this.expireDate
      })
    }
  }
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
    @include button($navypurple, $white);

    width: 20%;
    max-width: 25%;
    align-self: flex-end;
  }
}
</style>
