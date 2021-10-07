<template>
  <layout>
    <div class="navBar">
      <icon class='leftIcon' name="left"/>
      <span class="title">编辑标签</span>
      <sapn class="rightIcon"></sapn>
    </div>
    <div class="fontWrapper">
      <notes placeholder="请输入标签名" field-name="标签名"/>
    </div>
    <div class="ButtonWrapper">
      <Button>删除标签</Button>
    </div>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import Notes from '@/components/Notes.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Notes}
})
export default class LabelsEdit extends Vue {

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style scoped lang='scss'>
.navBar {
  text-align: center;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 16px;

  > .title {
  }

  > .leftIcon {
    height: 24px;
    width: 24px;
  }

  > .rightIcon {
    height: 24px;
    width: 24px;
  }
}
.fontWrapper{
  background: white;
  margin-top: 8px;
}
.ButtonWrapper{
  text-align: center;
  margin-top: 8px;
}
</style>