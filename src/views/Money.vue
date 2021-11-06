<template>
  <div>
    <Layout classprefix="classprefix">
      <Tags/>
      <Notes @update:value="onUpdateNotes" placeholder="请在这里输入备注" field-name="备注"/>
      <Tabs  :data-source="typeList" :value.sync="record.type" />
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/Tags.vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';



//const tagList = store.tagList;
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


@Component({
      components: {Tabs, Notes, Types, NumberPad, Tags},
      // computed: {//数据不管是对象和值都要放在这里,当值变化时对这些数据进行监听，保证数据的及时和灵活
      //   recordList () {return this.$store.state.recordList},
      // }
    },
)
export default class Money extends Vue {

  typeList=typeList
  // eslint-disable-next-line no-undef
  record: RecordItem = {tags: [], notes: '', type: '+', amount: 0, createdAt: undefined};
  // eslint-disable-next-line no-undef
  get recordList () {return this.$store.state.recordList}


created(){
  this.$store.commit('fetchRecords')
}
  onUpdateNotes(value: string) {

    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    try {
      this.$store.commit('createRecord',this.record
      );
    } catch (error) {
      console.log('saveRecord');
      console.log(error);
    }
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