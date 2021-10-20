<template>
  <div>
    <Layout classprefix="classprefix">
      {{record}}
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes" placeholder="请在这里输入备注" field-name="备注"/>
      <Types :value.sync="record.type"/>
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Tags.vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import recordListModel from '@/models/recordListModel';


const tagList = window.tagList;
//  //数据库升级和转移的一些处理
// const version = window.localStorage.getItem('version') || '0';
// const recordLIst: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '');
// if (version === '0.0.1') {
//   //数据库的迁移和升级
//   recordLIst.forEach(record=>{
//     record.createdAt=new Date(2007, 5 ,21)
//   });
//   //保存数据
//   window.localStorage.setItem('recordLIst',JSON.stringify(recordLIst))
// }
// window.localStorage.setItem('version','0.0.8')


@Component({components: {Notes, Types, NumberPad, Tags},})
export default class Money extends Vue {
  tags = window.tagList

  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '+', amount: 0, createdAt: undefined};

  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordListModel.fetch()||[];


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {

    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    try {
      recordListModel.create(this.record)
    } catch (error) {
      console.log('saveRecord');
      console.log(error);
    }
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style>
.classprefix-content {

}

.classprefix-wrapper {

}
</style>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';

</style>