<template>
  <div>
    <layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tags"
                     :key="tag.id" :to="`/labels/edit/${tag.id}`"><span>{{ tag.name }} </span>
          <icon name="right"></icon>
        </router-link>
      </div>
      <div class="newTag-wrapper">
        <Button @click="createTag">新增标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';


@Component({
  components: {Button},

})
export default class Lables extends mixins(TagHelper) {
   get  tags() {
    return this.$store.state.tagList;
  }
  beforeCreated(){
    this.$store.commit('fetchTags')
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    this.$store.commit('createTage',name)
  }
}
</script>

<style scoped lang="scss">
.tags {
  background: white;
  padding-left: 16px;

  > .tag {
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