<style lang="less" type="text/less">
  @import '../assets/styles/common.less';

  .evaluation-wrap{
    background-color:#1E3E94;padding-bottom: 220px;
    .evaluation-box{
      padding-top:140px;text-align: center;
      >img{
        width: 226px;height: 227px;vertical-align: middle;
      }
      p{
        width:528px;font-size: 32px;display: inline-block;
        color: #C3D7FF;line-height: 56px;margin-top: 40px;
      }
    }
    .btn-wrap{
      margin-top:400px;text-align: center;
      .btn{

      }
    }
    .bot-remind{
      margin-top: 60px;
      font-size: 20px;
      color: #999999;text-align: center;
    }

  }
</style>

<template>
<div class="evaluation-wrap">
  <div class="evaluation-box">
    <img src="../assets/images/index/logo.png">
    <p>快来进行测评吧，让旺旺保为您智能推荐最合适的保险产品</p>
  </div>
  <div class="btn-wrap"><router-link to="/evaluationloading" class="btn">开始测评</router-link></div>
  <div class="bot-remind">旺旺保保险智能推荐专业平台</div>

</div>
</template>

<script>

  export default {
    data () {
      return {
        show:true,

      }
    },
    components:{

    },
    computed: {

    },
    methods: {

    },
    watch:{
//      message: function () {
//        this.changeVal(this.message);
//      }
    }
  }
</script>
