<template>
  <ul class='types' :class="{[classPrefix+'tab']:classPrefix}">
    <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}" @click="selectType('-')">收入</li>
    <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}" @click="selectType('+')">支出</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

// @Component({
//   props: {
//     propMessage: String,
//   }
// })
@Component
export default class Types extends Vue {
  @Prop(Number) xxx: number |undefined;
  @Prop() readonly value!:string;
  @Prop(String) classPrefix?:string

  //helloMsg='hello'+this.propMessage;
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type)
  }

}
// export default {
//   // name: "Types",
//   // data(){
//   //   return{
//   //     type:'-',
//   //   }
//   // },
//   // methods:{
//   //   selectType(type){
//   //     if(type!=='-' && type!=='+'){
//   //       throw new Error('type is unknown')
//   //     }
//   //     this.type=type
//   //   }
//   // }
// }

</script>

<style scoped lang='scss'>
@import '~@/assets/style/helper.scss';

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;

    }
  }
}
</style>