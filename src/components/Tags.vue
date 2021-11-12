<template>
  <div class="tags">
    <ol class="current">
      <li v-for="tag in tagList" :key="tag.id"
          @click="toggle(tag)"
          :selectedTags="selectedTags"
          :class="{selected:selectedTags.indexOf(tag)>=0}">
        {{ tag.name }}
      </li>

    </ol>
    <div class="new-current">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';

@Component({
})
export default class Tags extends mixins(TagHelper) {
  //@Prop(Array) readonly dataSource: string[] = [];
  selectedTags: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
  this.$store.commit('fetchTags')
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      // this.selectedTags.push(tag);
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';

.tags {
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $h: 24px;
      $bg: #d9d9d9;
      background: $bg;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 3px;
      &.selected {
        background: #EEC900;;
        color: #EE4000;
      }
    }
  }

  > .new-current {
    padding: 16px 0;

    button {
      background: transparent; //背景色透明
      border: none;
      border-bottom: 1px solid;
      padding: 0 3px;
      color: #999;
    }
  }

}
</style>