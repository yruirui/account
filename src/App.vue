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
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  line-height:1.5
}
a{
  text-decoration:none;
  color:inherit;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
