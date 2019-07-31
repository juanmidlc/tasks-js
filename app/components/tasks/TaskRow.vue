<template>
  <tr class="TaskRow__row">
    <td>
      <input class="TaskRow__check" type="checkbox">
    </td>
    <td class="TaskRow__name">
      <label>{{ task.name }}</label>
    </td>
    <td class="TaskRow__color">
      <div
        class="TaskRow__colordiv"
        :style="bgcolor"
      />
    </td>
    <td
      class="TaskRow__category"
      :style="colorc"
    >
      <label>{{ task.category.name }}</label>
    </td>
    <td class="TaskRow__description">
      <label>{{ task.description }}</label>
    </td>
    <td class="TaskRow__time">
      <label>{{ task.start_at }}</label>
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
    },
    colorc() {
      const col = this.task.color
      return { color: `#${col}` }
    }
  }
}
</script>
<style lang="scss" scoped>
.TaskRow {
&__row {
  background-color: #FFFFFF;
}
&__check {
  width: 50px;
}
&__name {
  color: #514A66;
  font-family: 'Noirden, Bold';
  font-size: 14px;
  width: 200px;
}
&__color {
  width: 30px;
  display: flex;
  justify-content: center;
  display: table-cell;
  text-align: center;
}
&__colordiv {
  border-radius: 50%;
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin: 0 auto;
}
&__category {
  font-family: 'RNS Sanz, SemiBold';
  font-size: 14px;
  width: 180px;
}
&__description {
  color: #514A66;
  opacity: 0.54;
  font-family: 'RNS Sanz, SemiBold';
  font-size: 14px;
  width: 300px;
}
&__time {
  color: #514A66;
  font-family: 'Noirden, Bold';
  font-size: 14px;
}
}
</style>
