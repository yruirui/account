<template>
  <div class="tags">
    <ol class="current">
      <li v-for="tag in dataSource" :key="tag.id"
          @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0}">
        {{ tag.name }}
      </li>

    </ol>
    <div class="new-current">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  //@Prop(Array) readonly dataSource: string[] = [];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      window.alert('标签名不能为空');
    } else {
      this.$emit('update:value', [...this.dataSource as string[], name]);
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