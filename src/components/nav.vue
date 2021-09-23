<template>
  <nav>
    <router-link to="/money" class="item" active-class="selecte">
      <Icon name="money" />
      记账
    </router-link>
    
    <router-link to="/labels" class="item" active-class="selecte"><Icon name="lable" />标签</router-link>
    
    <router-link to="/statistics" class="item" active-class="selecte"><Icon name="statistics"/>统计</router-link>
  </nav>
</template>

<script lang="ts">
// import x from '@/assets/icons/lable.svg'
// console.log(x)
//将一个目录的svg文件引入当前目录
let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

export default {
  name: "Nav",
};
</script>

<style lang='scss' scoped>
@import '~@/assets/style/helper.scss';
nav {
  display:flex;
  box-shadow:0 0 3px rgbs(0, 0, 0, 0.25);
  font-size:12px;
  > .item{
    width:33.333%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
   > .icon{
      height: 32px;
      width: 32px;
    }
  }
  >.selecte{
      color:$color-heightLine
    }
  
}
</style>