<template>
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
</template>

<script>
export default {
  name: "NumberPad"
}
</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';
.numberPad{
  >.output{
  @extend %inlineShadow;
  font-size:36px;
  font-family:Consolas,monospace;
  padding:9px 16px;
  text-align:right;

}
}
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
</style>