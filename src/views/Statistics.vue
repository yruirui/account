<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index" >
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span> {{tagString(item.tags)}}</span>
              <span class="note">{{item.notes}}
              </span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs1 from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
import Notes from '@/components/Notes.vue';


@Component({
  components: {Tabs: Tabs1}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

noteString(note:string){
    return note=note.Substring(0,);
}
  tagString(tags:Tag[]){
    return tags.length===0? '无' : tags.join(',')
  }
  get result() {//对recordList做一个分组（简单处理数据）
    const {recordList} = this;
    type hashTableValue = { title: string, items: RecordItem[] }
    // eslint-disable-next-line no-undef
    const hashTable: { [key: string]: hashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createdAt.split('T');

      hashTable[data] = hashTable[data] || {title: data, items: []};
      hashTable[data].items.push(recordList[i]);
    }
    return hashTable;
  }

  created() {
    this.$store.commit('fetchRecords');

  }

  type = '-';
  intervalList = intervalList;
  interval = 'day';
  typeList = typeList;
}
</script>
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

;
::v-deep .interval-tabs-item {
  height: 48px;
}
%item{
  padding: 8px 16px;
  min-height:40px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  line-height: 24px;
}
.record{
  @extend %item;
  background: white;
}
.title{
  @extend %item;
}
.note{
  margin-right: auto;
  color: #999;
  margin-left: 8px;
}
</style>
