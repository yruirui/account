<template>
  <div class="tags">
  <ol class="current">
    <li>衣</li>
    <li>食</li>
    <li>住</li>
    <li>行</li>
  </ol>
  <div class="new-current">
    <button>新增标签</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Tags"
}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';
.tags{
  font-size:14px;
  padding: 16px;
  >.current{
    display:flex;
    flex-wrap:wrap;
    >li{
      $h:24px;
      background:#d9d9d9;
      height:$h;
      line-height:$h;
      border-radius:$h/2;
      padding:0 16px;
      margin-right:12px;
      margin-top:3px;
    }
  }
  >.new-current{
    padding: 16px 0;
    button{
      background:transparent;//背景色透明
      border:none;
      border-bottom:1px solid;
      padding:0 3px;
      color:#999;
    }
  }

}
</style>