<template>
  <lable class="notes" name="">
    <span class="name">{{ this.fieldName }}</span>
    <input type="text" v-model="value" :placeholder="this.placeholder"/>
  </lable>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:value', value);
  }

}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';

.notes {
  font-size: 14px;
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