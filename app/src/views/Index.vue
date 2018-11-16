<style lang="less" type="text/less">
  .index-wrap{
    background-color:#1E3E94;padding-bottom: 160px;
    .my-project{
      padding-top: 36px;text-align: right;padding-right: 36px;
      >img{
        width: 44px;height: 44px;border-radius:22px;
        vertical-align: middle;margin-right: 4px;
      }
      >a{
        font-size: 24px;color: #C3D7FF;
      }
    }
    .logo-box{
      padding: 30px 0;text-align: center;font-size: 32px;color: #C3D7FF;
      >img{
        width: 226px;height: 227px;vertical-align: middle;
      }
      strong{
        font-size: 52px;color: #fff;display: block;padding: 10px 0;font-weight: normal;
      }
    }
    .pro-topic,.pro-analysis{
      width: 90%;margin:40px 5% 0;background-color: #598FF7;border-radius: 4px;overflow: hidden;
      >a{
        display: block;width: 100%;padding: 24px;text-align: center;
        font-size: 24px;color: #C3D7FF;
        img{
          width: 109px;height: 102px;vertical-align: middle;
        }
        strong{
          display: block;font-weight: normal;font-size: 40px;
          color: #FFFFFF;margin-top: 20px;
        }
      }
    }


  }
</style>

<template>
<div class="index-wrap">
  <div class="my-project">
    <img src="../assets/images/index/head.png">
    <a href="#">我的方案</a>
  </div>
  <div class="logo-box">
    <img src="../assets/images/index/logo.png">
    <p><strong>旺旺保</strong>保险智能推荐专业平台</p>
  </div>
  <div class="pro-topic">
    <router-link to="/evaluationenter">
      <img src="../assets/images/index/topic.png">
      <p><strong>保险智能推荐</strong>选择保险不用愁，只推荐适合你的产品</p>
    </router-link>
  </div>
  <div class="pro-analysis">
    <a href="#">
      <img src="../assets/images/index/analysis.png">
      <p><strong>保险产品解析</strong>分析产品优缺点，不忘易被忽略的小细节</p>
    </a>
  </div>

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
