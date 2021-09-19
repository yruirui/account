<template>
  <div class="nav-wrapper">
    <div class="contenner">
     这里是M
    </div>   
    <Nav />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  components: { Nav },
  name: "Money",
};
</script>

<style scoped>
.nav-wrapper{
  display:flex;
  flex-direction:column;
  height:100vh;
}
.contenner{
 flex-grow:1;
 overflow:auto;
}
</style>