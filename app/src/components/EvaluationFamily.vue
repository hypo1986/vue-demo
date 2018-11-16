<style lang="less" type="text/less">
  .evaluation-family {
    .ef-box {
      height: 300px;
      .efi-list {
        padding: 30px;
        li {
          font-size: 28px;
          height: 58px;
          line-height: 58px;
          color: #598FF7;
          display: inline-block;
          margin-right: 30px;
          text-align: center;
          padding: 0 30px;
          background-color: #FFFFFF;
          border: 2px solid #598FF7;
          border-radius: 44px;
          &.on {
            color: #fff;
            background-color: #598FF7;
          }
        }
      }
    }

  }
</style>
<template>
  <div class="evaluation-family">
    <div class="ef-box">
      <ul class="efi-list">
        <li v-for="(item,index) in allList" :class="item.checked?'on':''" :key="index" @click="checkedTab(index)">{{item.val}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'evaluationfamily',
//    props: {
//      questionObj:{
//        type: Array,
//        default:[]
//      }
//    },
    components: {},
    data() {
      return {
        checkedList: ['自己'],
        allList: [{checked: true, val: '自己'},
          {checked: false, val: '配偶'},
          {checked: false, val: '儿子'},
          {checked: false, val: '女儿'},
          {checked: false, val: '父亲'},
          {checked: false, val: '母亲'}
        ]
      }
    },
    created() {
      this.updateCurrentAns();
    },
    methods: {
      checkedTab(index) {
        let thisVal = this.allList[index].val;
        if (this.checkedList.indexOf(thisVal) > -1) {
          this.allList[index].checked = false;
          let thisIndex = this.checkedList.indexOf(thisVal);
          this.checkedList.splice(thisIndex, 1);
        } else {
          this.checkedList.push(thisVal);
          this.allList[index].checked = true;
        }
        this.updateCurrentAns();
      },
      updateCurrentAns(){
        this.$store.state.currentAns.answer = this.checkedList;
        this.$store.state.currentAns.answertpl = this.checkedList.join('<br/>');
      }
//      compRender() {
//        const thisIndex = this.$store.state.listIndex;
//        this.$store.state.list[thisIndex].answer = this.checkedList.join('<br/>');
//        this.$store.state.list.push({
//          question: this.$store.state.questionObj[thisIndex + 1],
//          answer: ''
//        });
//        this.$store.state.listIndex++;
//        this.$store.state.currentCompName = this.$store.state.compNames[thisIndex + 1];
//        this.$emit('parantMethod',data)
//      }
    }
  }
</script>


