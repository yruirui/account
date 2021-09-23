<template>
  <div>
    <Layout classprefix="classprefix">
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
      <div>
        <lable class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入备注"/>
          </lable>
        </div>
      <div >
        <ul class='types'>
          <li class="selecte">收入</li>
          <li>支出</li>
        </ul>
      </div>
      <div class="numberPad">      
        <div class="output">100</div>
        <diV class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="botton-ok">OK</button>
          <button class="bottom-zero">0</button>
          <button>.</button>
        </diV>
      </div>
    </Layout>
   </div>
</template>

<script>

export default {
  components: { },
  name: "Money",
};
</script>

<style>
 .classprefix-content{
   
 }
 .classprefix-wrapper{
  
 }
</style>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';
.buttons{
  @extend %clearFix;
  button{
    width: 25%;
    height:64px;
    float:left;
    background: transparent;
    border:none;
    &.botton-ok{
      height: 128px;
      float:right;
    }
    &.bottom-zero{
      width: 50%;
    }
    $bcolor:#f2f2f2;
    &:nth-child(1){
      background: $bcolor;
    }
    &:nth-child(2),&:nth-child(5){
      background:darken($bcolor,4%)
    }
    &:nth-child(3),&:nth-child(6),&:nth-child(9){
      background:darken($bcolor,4%*2)
    }
    &:nth-child(4),&:nth-child(7),&:nth-child(10){
      background:darken($bcolor,4%*3)
    }
    &:nth-child(8),&:nth-child(11),&:nth-child(13){
      background:darken($bcolor,4%*4)
    }
    &:nth-child(14){
      background:darken($bcolor,4%*5)
    }
    &:nth-child(12){
      background:darken($bcolor,4%*6)
    }
  }
}
.numberPad{
  >.output{
    @extend %inlineShadow;
    font-size:36px;
    font-family:Consolas,monospace;
    padding:9px 16px;
    text-align:right;
    
  }
}
.types{
  background:#c4c4c4;
  display: flex;
  text-align:center;
  font-size:24px;
  >li{
    width:50%;
    height:64px;
    display:flex;
    justify-content:center;
    align-items: center;
    position: relative;
    &.selecte::after{
      content:'';
      position:absolute;
      bottom:0;
      left:0;
      width: 100%;
      height: 4px;
      background:#333;

    }
  }
}
.notes{
    font-size:14px;
    background:#f5f5f5;
    padding: 0 16px;
    display:flex;
    align-items:center;
    >.name{
      padding-right: 16px;
    }
    input{
      height: 64px;
      flex-grow:1;
      border:none;
      background: transparent;
    }
  }
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