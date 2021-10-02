<template>
  <div>
    <layout>
      <ol class="tags" v-for="tag in tags" :key="tag">
        <li><span>{{ tag }}</span>
          <icon name="right"></icon>
        </li>
      </ol>
      <div class="newTag-wrapper">
        <button class="newTag" @click="createTag">新增标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Lables extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message=tagListModel.create(name);
      if(message==='success'){
        window.alert('创建标签成功')
      }else if(message==='duplicated'){
        window.alert('标签重复')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tags {
  background: white;
  padding-left: 16px;

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    border-bottom: 1px solid #e6e6e6;

    svg {
      margin-right: 16px;
    }
  }
}

.newTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>