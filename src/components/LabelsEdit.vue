<template>
  <layout>
    <div class="navBar">
      <icon class='leftIcon' name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <sapn class="rightIcon"></sapn>
    </div>
    <div class="fontWrapper">
      <Notes :value="tag.name"
             @update:value="updateTag"
             placeholder="请输入标签名"
             field-name="标签名"/>
    </div>
    <div class="ButtonWrapper">
      <Button @click="removeTag">删除标签</Button>
    </div>
  </layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import Notes from '@/components/Notes.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Notes},
})
export default class LabelsEdit extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag',{id:this.tag.id,name})
    }
  }

  removeTag(id: string) {
    if (this.tag) {
      this.$store.commit('removeTag',this.tag.id)
    }
  }

  goBack() {
    this.$router.back();
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

.fontWrapper {
  background: white;
  margin-top: 8px;
}

.ButtonWrapper {
  text-align: center;
  margin-top: 8px;
}
</style>