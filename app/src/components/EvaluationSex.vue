<style lang="less" type="text/less">
  .evaluation-radio{
    .er-box{
      height: 300px;
      .eli-title{
        font-size: 32px;
        color: #393939;text-align: center;padding-top: 30px;
      }
      .eli-list{
        padding-top: 30px;
        li{
          font-size: 28px;text-align: center;
          color: #898989;line-height: 88px;
          &.on{
            font-size: 36px;
            color: #393939;background-color: #F5F5F9;
          }
        }
      }
    }

  }
</style>
<template>
  <div class="evaluation-radio">
    <div class="er-box">
      <p class="eli-title">{{radioTitle}}</p>
      <ul class="eli-list">
        <li v-for="(val,i) in radioList" :class="isIndex == i?'on':''" :key="i" @click="radioTab(i)">{{val}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'evaluationsex',
    props: {
//      msg:{
//        type: String,
//        default:''
//      }
    },
    components: {

    },
    data() {
      return {
        isIndex:0,
        radioVal:'男',
        radioList: ['男', '女'],
        radioTitle: '性别'
      }
    },
    created() {
      this.updateCurrentAns();
    },
    methods: {
      radioTab(index){
        this.radioVal = this.radioList[index];
        this.isIndex = index;
        this.updateCurrentAns();
      },
      updateCurrentAns(){
        this.$store.state.currentAns.answer = this.radioVal;
        this.$store.state.currentAns.answertpl = this.radioVal;
      }
//      compRender(){
//        const thisIndex = this.$store.state.listIndex;
//        this.$store.state.list[thisIndex].answer = this.radioVal;
//        this.$store.state.list.push({
//          question:this.$store.state.questionObj[thisIndex+1],
//          answer:''
//        });
//        this.$store.state.listIndex++;
//        this.$store.state.currentCompName = this.$store.state.compNames[thisIndex+1];
//      }
    }
  }
</script>


