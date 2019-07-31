<template>
  <section>
    <div class="triangle" />
    <div class="diamond" />
    <div class="circle" />
    <div class="rectangle" />
    <div class="rectangle-1" />
    <div class="rectangle-2" />
    <div class="rectangle-3" />
    <div class="rectangle-2-inv" />
    <div class="rectangle-1-inv" />
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.triangle {
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
.diamond {
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
.rectangle {
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
.circle {
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
.rectangle-1 {
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
.rectangle-2 {
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
.rectangle-3 {
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
.rectangle-2-inv {
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
.rectangle-1-inv{
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
</style>
