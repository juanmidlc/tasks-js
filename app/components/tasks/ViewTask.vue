<template>
  <div class="container ViewTaskForm">
    <section>
      <label class="ViewTaskForm__tittle">
        Tareas
      </label>
      <back-forms />
      <label class="ViewTaskForm__day">Hoy</label>
      <task-table />
      <label class="ViewTaskForm__day">Mañana</label>
      <task-table />
      <button-create
        ref="form">
        <task-form
          @saved="close()"/>
      </button-create>
    </section>
  </div>
</template>
<script>
import TaskTable from './TaskTable'
import BackForms from './BackForms'
import ButtonCreate from './ButtonCreate'
import TaskForm from './TaskForm'

export default {
  components: {
    TaskTable,
    TaskForm,
    BackForms,
    ButtonCreate
  },
  methods: {
    close() {
      this.$refs.form.close()
    }
  }
}
</script>
<style lang="scss" scoped>
.ViewTaskForm {
  background-color: $whiteback;
  color: $hanpurple;
  z-index: 2;

&__tittle {
  border-bottom: 1px solid #4315A9;
  font-family: 'RNS Sanz, ExtaBold';
  font-size: 32px;
  color: #8650FF;
}
&__day {
  font-family: 'Noirden, Bold';
  color: #A19DAC;
  font-size: 14px;
}
}
</style>
