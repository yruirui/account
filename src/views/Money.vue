<template>
  <div>
    <Layout classprefix="classprefix">
      <Tags />
      <Notes />
      <Types />
      <NumberPad />
    </Layout>
   </div>
</template>

<script lang="ts">

import Tags from "@/components/Tags.vue";
import NumberPad from "@/components/NumberPad.vue";
import Types from "@/components/Types.vue";
import Notes from "@/components/Notes.vue";
export default {
  components: {Notes, Types, NumberPad, Tags },
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

</style>