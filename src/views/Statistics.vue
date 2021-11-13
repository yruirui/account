<template>
  <layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" class="stabs"/>
    <div>
      <ol v-if="groupList.length>0">
        <li v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{ group.title }}<span>{{group.total}}</span></h3>
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
      <div v-else class="norecord">
        目前没有记录，请添加
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs1 from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';


@Component({
  components: {Tabs: Tabs1}
})
export default class Statistics extends Vue {
  get recordList() {
    return this.$store.state.recordList as RecordItem[];
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月d日');
    } else {
      return day.format('y年m月d日');
    }
  }

  tagString(tags: Tag[]) {
    if (tags.length === 0) {
      return '无';
    } else {
      let tagstring = '';
      for (let i = 0; i < tags.length; i++) {
        tagstring = tagstring.concat(tags[i].name, ' ');
      }
      return tagstring;
    }
  }

  get groupList() {//对recordList做一个分组（简单处理数据）
    const {recordList} = this;
    type hashTableValue = { title: string, items: RecordItem[] }
    const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {
      return [] as Result;
    }
    type Result={title:string,items:RecordItem[],total?:number}[]
    const result : Result= [{title: dayjs(newList[0].createdAt).format('YYYY年M月D日'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];//x的在最后一项
      const a = dayjs(current.createdAt).format('YYYY年M月D日');
      if (last.title === a) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY年M月D日'), items: [current]});
      }
    }
    result.map(group=>{
      group.total=group.items.reduce((sum,item)=>sum+item.amount,0)
    })
    console.log('nishigepi')
    return result;
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
.norecord{
  padding: 16px;
  text-align: center;
}
::v-deep .type-tabs-item {
  background: white;
  &.selected {
  background: #EEC900;;

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
