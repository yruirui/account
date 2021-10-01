<template>
  <lable class="notes" name="">
    {{ value }}
    <span class="name">备注</span>
    <input type="text" v-model="value" placeholder="在这里输入备注"/>
  </lable>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

@Watch('value')
  onValueChange(value:string){
this.$emit('update:value',value)
}

}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    border: none;
    background: transparent;
  }
}
</style>