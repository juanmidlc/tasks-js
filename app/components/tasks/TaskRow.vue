<template>
  <tr class="TaskRow__row">
    <td>
      <input type="checkbox">
    </td>
    <td class="TaskRow__widht">
      <h6 class="TaskRow__name">{{ task.name }}</h6>
    </td>
    <td>
      <div
        class="TaskRow__color"
        :style="bgcolor"
      />
    </td>
    <td>
      <h6>{{ task.category.name }}</h6>
    </td>
    <td class="TaskRow__description">
      <h6>{{ task.description }}</h6>
    </td>
    <td class="TaskRow__time">
      <h6>{{ task.start_at }}</h6>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    bgcolor() {
      const col = this.task.color
      return { backgroundColor: `#${col}` }
    }
  }
}
</script>
<style lang="scss" scoped>
.TaskRow {
&__row {
  background-color: #FFFFFF;
}
&__widht {
  max-width: 150px;
}
&__name {
  color: #514A66;
  font-family: 'Noirden, Bold';
  font-size: 14px;
}
&__color {
  border-radius: 50%;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
}
&__description {
  color: #514A66;
  font-family: 'RNS Sanz, SemiBold';
  font-size: 14px;
  opacity: 0.54;
}
&__time {
  color: #514A66;
  font-family: 'Noirden, Bold';
  font-size: 14px;
}
}
</style>
