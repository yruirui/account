<template>
  <lable class="notes">
    {{ value }}
    <span class="name">备注</span>
    <input type="text" :value="value" @input="oninput" placeholder="在这里输入备注"/>
  </lable>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

export default class Notes extends Vue {
  value = '';

  oninput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
    console.log("======")
    console.log(this.value)
    this.value = input.value;
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