<template>
  <div class="tags">
    <ol class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0}">
        {{ tag }}
      </li>

    </ol>
    <div class="new-current">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) dataSource: string[] = [];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }

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
        background: darken($bg, 50%);
        color: whitesmoke;
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