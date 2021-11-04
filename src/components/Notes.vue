<template>
  <label class="notes">
    <span class="name">{{ this.fieldName }}</span>
    <input type="text"
           :value="value"
           @input="onValueChange($event.target.value)"
           :placeholder="this.placeholder" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({default:''}) value!:string;
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