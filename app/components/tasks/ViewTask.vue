<template>
  <div class="container ViewTaskForm">
    <section>
      <label class="ViewTaskForm__tittle">
        Tareas
      </label>
      <div class="triangulo" />
      <div class="rombo" />
      <div class="circulo" />
      <div class="rectangulo" />
      <div class="rectangulo-1" />
      <div class="rectangulo-2" />
      <div class="rectangulo-3" />
      <div class="rectangulo-2-inv" />
      <div class="rectangulo-1-inv" />
      <br>
      <form>
        <label class="ViewTaskForm__day">Hoy</label>
        <table class="egt row">
          <tr>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
          </tr>
          <task-row
            v-for="task in tasks"
            :task="task"
            :key="task.id"/>
        </table>
        <label class="ViewTaskForm__day">Mañana</label>
        <table class="egt row">
          <tr>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
            <th>Hola</th>
          </tr>
          <task-row
            v-for="task in tasks"
            :task="task"
            :key="task.id"/>
        </table>
      </form>
      <button class="ViewTaskForm__button" type="submit"> <svg-icon class="ViewTaskForm__icon" name="plus" /> </button>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TaskRow from './TaskRow'

export default {
  components: {
    TaskRow
  },
  data() {
    return {
      task: {}
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.items
    })
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
&__button {
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
&__icon {
  width: 22.23px;
  height: 23.93px;
  fill: #FFFFFF;
  position: fixed;
  bottom: 91.07px;
  right: 106.73px;
}
table {
  width: 100%;
}
th, td {
   max-width: 16.66%;
}
.triangulo {
  width: 0;
  height: 0;
  border-right: 66px solid #ED5DCB;
  opacity: 0.52;
  border-top: 41px solid transparent;
  border-bottom: 41px solid transparent;
  position: fixed;
  top: 128px;
  right: 47px;
  transform: rotate(0deg);
  z-index: 0;
}
.rombo {
  width: 71px;
  height: 77px;
  background: #4DE1DF;
  opacity: 0.50;
  transform: rotate(137deg);
  position: fixed;
  top: 95.13px;
  right: -40px;
  z-index: 0;
}
.rectangulo {
  width: 47px;
  height: 79px;
  background: #8147FF;
  opacity: 0.56;
  transform: rotate(316deg);
  position: fixed;
  bottom: 25px;
  left: 42px;
  z-index: 0;
}
.circulo {
    width: 74px;
    height: 73px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #FFE549;
    opacity: 0.61;
    position: fixed;
    bottom: -15px;
    left: -15px;
    z-index: 0;
}
.rectangulo-1 {
  width: 41px;
  height: 64px;
  background: #8E8D92;
  opacity: 0.53;
  transform: rotate(50deg);
  position: fixed;
  bottom: 255.95px;
  right:25px;
  z-index: 0;
}
.rectangulo-2 {
  width: 41px;
  height: 64px;
  background: #FFE549;
  opacity: 0.7;
  transform: rotate(50deg);
  position: fixed;
  bottom: 185px;
  right:45px;
  z-index: 0;
}
.rectangulo-3 {
  width: 41px;
  height: 64px;
  background: #D434AF;
  opacity: 0.53;
  transform: rotate(50deg);
  position: fixed;
  bottom: 113px;
  right:65px;
  z-index: 0;
}
.rectangulo-2-inv {
  width: 41px;
  height: 64px;
  background: #FFE549;
  opacity: 0.7;
  transform: rotate(50deg);
  position: fixed;
  bottom: 106px;
  right:139px;
  z-index: 0;
}
.rectangulo-1-inv{
  width: 41px;
  height: 64px;
  background: #8E8D92;
  opacity: 0.53;
  transform: rotate(50deg);
  position: fixed;
  bottom: 100px;
  right:212px;
  z-index: 0;
}
}
</style>
