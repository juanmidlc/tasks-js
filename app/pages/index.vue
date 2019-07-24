<template>
  <div>
    <div>
      <ViewTaskForm />
    </div>
  </div>
</template>
<script>

import ViewTaskForm from '~/components/tasks/TaskForm.vue'
export default {
  components: {
    ViewTaskForm
  },
  async asyncData({ store }) {
    await store.dispatch('categories/fetch')
    await store.dispatch('tasks/fetch')
  }
}
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.app-form {
  @include col-xs(12);
  @include col-sm(6);
  @include col-md(6);
  @include col-lg(6);
  @include col-xl(4);

  padding: 12px 16px;
  box-sizing: border-box;
}
</style>
