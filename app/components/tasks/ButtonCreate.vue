<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="close()">
          <slot/>
        </div>
      </div>
    </transition>
    <button @click="open()" class="button" type="submit">
      <svg-icon class="icon" name="plus" />
    </button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>
<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
.button {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-color: #5C1DE8;
  box-shadow: 0px 4px 8px;
  position: fixed;
  bottom: 64px;
  right: 79px;
  border: none;
}
.icon {
  width: 22.23px;
  height: 23.93px;
  fill: #FFFFFF;
  position: fixed;
  bottom: 91.07px;
  right: 106.73px;
}
</style>
