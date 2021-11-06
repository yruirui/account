<template>
  <layout>
    <Tabs class-prefix="type" :data-source="array2" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="array" :value.sync="interval"/>
    <div>
      type{{type}}
      <br/>
      interval{{interval}}
    </div>
  </layout>
</template>
<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>
<script>
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Types from "@/components/Types";
import Tabs from "@/components/Tabs";


@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-'
  array = [{text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'},
  ]
  interval='day'
  array2=[{text: '收入', value: '+'},
    {text: '支出', value: '-'},]
}
</script>

