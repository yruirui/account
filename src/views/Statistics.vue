<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
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
import intervalList from "@/constants/intervalList";
import typeList from "@/constants/typeList";


@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-'
  intervalList = intervalList
  interval='day'
  typeList=typeList
}
</script>

