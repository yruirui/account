<template>
  <div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/resets.scss';
body{
  line-height:1.5;
  font-family:$font-hei;
  color:#333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
