<template>
  <div class="nav">
    <router-link to="/money">记账</router-link>|
    <router-link to="/labels">标签</router-link>|
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script>
import x from '@/assets/icons/lable.svg'
console.log(x)
export default {
  name: "Nav",
};
</script>

<style scoped>
.nav{
  border:red 1px solid;
  
}
</style>