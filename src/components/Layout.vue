<template>
  <div class="layout-wrapper" :class="classprefix && `${classprefix}-wrapper`">
    <div class="contenner" :class="classprefix && `${classprefix}-content`">
     <slot></slot>
    </div>   
    <Nav />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
export default {
  props:['classprefix'],
  components: { Nav },
  name: "Layout",
};
</script>

<style scoped>
.layout-wrapper{
  display:flex;
  flex-direction:column;
  height:100vh;
}
.contenner{
 flex-grow:1;
 overflow:auto;
}
</style>