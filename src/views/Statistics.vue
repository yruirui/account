<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <li v-for="(group,index) in result" :key="index">
          <h3 class="title">{{ beautify(group.title)}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span> {{ tagString(item.tags) }}</span>
              <span class="note">{{ item.notes }}
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
import dayjs from 'dayjs'


@Component({
  components: {Tabs: Tabs1}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  beautify(string:string) {
   const day=dayjs(string)
    const now=dayjs()
    if(day.isSame(now,'day')){
      return '今天'
    }else if(day.isSame(now.subtract(1,'day'),'day')){
      return '昨天'
    }
    else if(day.isSame(now.subtract(2,'day'),'day')){
      return '前天'
    }
    else if(day.isSame(now,'year')){
      return day.format('M月d日')
    }
    else {
      return day.format('y年m月d日')
    }
  }

  tagString(tags: Tag[]) {
    if (tags.length === 0) {
      return '无';
    } else {
      let astring = tags.join(',');
      console.log(JSON.stringify(tags.join(',')));
      return astring;
    }
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

%item {
  padding: 8px 16px;
  min-height: 40px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  line-height: 24px;
}

.record {
  @extend %item;
  background: white;
}

.title {
  @extend %item;
}

.note {
  margin-right: auto;
  color: #999;
  margin-left: 8px;
}
</style>
