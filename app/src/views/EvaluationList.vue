<style lang="less" type="text/less">
  @import '../assets/styles/common.less';

  .eval-list-wrap {
    background-color: #EFEFF4;
    padding-bottom: 480px;
    padding-top: 60px;
    .el-item {
      dl.question {
        margin-bottom: 30px;
        dt {
          float: left;
          width: 68px;
          padding: 0 20px;
          > img {
            width: 68px;
            height: 68px;
            vertical-align: middle;
          }
        }
        dd {
          float: left;
          font-size: 28px;
          color: #333333;
          padding: 20px 30px;
          border-radius: 10px;
          background-color: #fff;
          max-width: 64%;
        }
      }
      dl.answer {
        margin-bottom: 30px;
        dt {
          float: right;
          width: 68px;
          padding: 0 20px;
          > img {
            width: 68px;
            height: 68px;
            vertical-align: middle;
          }
        }
        dd {
          float: right;
          font-size: 28px;
          color: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          background-color: #598FF7;
          max-width: 64%;
        }
      }
    }
    .el-botbox {
      height: 480px;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #fff;
      .comp-wrap {
        height: 300px;
      }
      .comp-btn {
        padding-top: 40px;
        text-align: center;
        .btn {
          font-size: 28px;
        }
      }
    }
  }
</style>

<template>
  <div class="eval-list-wrap">
    <div class="el-item" v-for="(item,index) in list" :key="index">
      <dl class="question clearfix">
        <dt><img src="../assets/images/index/myhead.png"></dt>
        <dd>{{item.question}}</dd>
      </dl>
      <dl class="answer clearfix" v-if="item.answer">
        <dt><img src="../assets/images/index/head.png"></dt>
        <dd v-html="item.answertpl"></dd>
      </dl>
    </div>

    <div class="el-botbox">
      <div class="comp-wrap">
        <!--<evaluation-radio :question-obj="questionObj"></evaluation-radio>-->
        <!--<component v-if="showComp" @parant-method="onA" :is="compName"></component>-->
        <component v-if="showComp" :is="compName"></component>
      </div>
      <div class="comp-btn">
        <button class="btn" @click="compRender()">确定</button>
      </div>
    </div>

  </div>
</template>

<script>
  import EvaluationSex from '../components/EvaluationSex.vue';
  import EvaluationFamily from '../components/EvaluationFamily.vue';
  import EvaluationCity from '../components/EvaluationCity.vue';

  export default {
    data() {
      return {
        //compName:this.$store.state.currentCompName,
        listIndex: 0,
        showComp: true
      }
    },
    created() {
      this.$store.state.list.push({
        question: this.$store.state.questionObj[0],
        answer: '',
        answertpl: ''
      })
    },
    components: {
      EvaluationSex,
      EvaluationFamily,
      EvaluationCity
    },
    computed: {
      list() {
        return this.$store.state.list;
      },
      compName() {
        return this.$store.state.currentCompName;
      }
    },
    methods: {
      refreshComp() {
        this.showComp = false
        this.$nextTick(() => {
          this.showComp = true
        })
      },
      compRender(){
        const thisIndex = this.$store.state.listIndex;
        this.$store.state.list[thisIndex].answer = this.$store.state.currentAns.answer;
        this.$store.state.list[thisIndex].answertpl = this.$store.state.currentAns.answertpl;
        this.$store.state.list.push({
          question:this.$store.state.questionObj[thisIndex+1],
          answer:'',
          answertpl: ''
        });
        this.$store.state.listIndex++;
        this.$store.state.currentCompName = this.$store.state.compNames[thisIndex+1];
        this.refreshComp();
      },
      onClick() {
//        let currentComp = this.$store.state.currentComp
//        // TO
//        this.$store.state.list.push({
////          currentAns
//        })
//        if(index<13) {
//          //  PUSH A QUESTION
//          let nextComp =  this.$store.state.dynamicComp[currentComp.index+1]
//          this.$store.state.list.push({})
//          this.$store.state.currentComp =nextComp
//        }
      }
    },
    watch: {
//      message: function () {
//        this.changeVal(this.message);
//      }
    }
  }
</script>
