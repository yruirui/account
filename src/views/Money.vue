<template>
  <div>
    <Layout classprefix="classprefix">
      {{record}}
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
      <Notes @update:value="onUpdateNotes"/>
      <Types :value.sync="record.type"  />
      <NumberPad @update:value="onUpdateAmount"/>
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

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}

@Component({components: {Notes, Types, NumberPad, Tags},})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {tags: [], notes: '', type: '+', amount: 0};

  onUpdateTags(value: string[]) {

    this.record.tags = value;
  }

  onUpdateNotes(value: string) {

    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
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