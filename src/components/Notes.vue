<template>
  <lable class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里输入备注"/>
  </lable>
</template>

<script lang="ts">
export default {
  name: "Notes"
}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';
.notes{
  font-size:14px;
  background:#f5f5f5;
  padding: 0 16px;
  display:flex;
  align-items:center;
>.name{
  padding-right: 16px;
}
input{
  height: 64px;
  flex-grow:1;
  border:none;
  background: transparent;
}
}
</style>