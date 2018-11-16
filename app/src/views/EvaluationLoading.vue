<style lang="less" type="text/less">
  .evaluation-wrap{
    background-color:#1E3E94;padding-bottom: 460px;
    .load-box{
      position: relative;padding-top:140px;text-align: center;
      .el-loading{
        text-align: center;width: 612px;height: 612px;display: inline-block;
        background: url('../assets/images/index/loading.png') no-repeat;
        background-size:100%;
        animation: myrotate 5s linear infinite;
        transform: rotate(0deg);
      }
      >img{
        width: 165px;height:189px;vertical-align: middle;
        position: absolute;left: 50%;margin-left: -82px;top:4.5rem;
      }
    }

    .bot-text{
      font-size: 32px;
      color: #C3D7FF;
      text-align: center;
      line-height: 56px;margin-top: 40px;
    }

  }
  @keyframes myrotate
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @-webkit-keyframes myrotate /* Safari 和 Chrome */
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>

<template>
<div class="evaluation-wrap">

  <div class="load-box">
    <p class="el-loading"></p>
    <img src="../assets/images/index/qlogo.png">
  </div>
  <div class="bot-text">正在加载中…</div>

</div>
</template>

<script>

  export default {
    data () {
      return {
        show:true
      }
    },
    components:{

    },
    computed: {

    },
    mounted: function () {
      this.setTimeoutInit();
    },
    methods: {
      setTimeoutInit () {
        setTimeout(() => {
          this.$router.replace('/EvaluationList');
          //alert(this.$router.push);
        }, 2000)
      }
    }

  }
</script>
