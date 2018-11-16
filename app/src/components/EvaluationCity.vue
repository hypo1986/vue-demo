<style lang="less" type="text/less">
  .evaluation-city {
    .er-box {
      height: 300px;
      .eli-title {
        font-size: 30px;
        overflow-x: auto;
        color: #4A4A4A;
        text-align: left;
        padding-top: 20px;
        span {
          display: inline-block;
          border-bottom: solid 2px #fff;
          line-height: 42px;
          margin-left: 30px;
          &.on {
            border-bottom: solid 2px #79C8F0;
          }
        }
      }
      .eli-list {
        padding-top: 30px;
        li {
          font-size: 28px;
          text-align: center;
          color: #898989;
          line-height: 88px;
          &.on {
            font-size: 36px;
            color: #393939;
            background-color: #F5F5F9;
          }
        }
      }
      .city-box {
        overflow: hidden;
        height: 3.6rem;
        .vux-picker {
          position: relative;
          top: -140px;
        }
      }
    }
    /*.scroller-component{height:280px;}*/
    /*.scroller-indicator{top:1.8rem;}*/
  }
</style>
<template>
  <div class="evaluation-city">
    <div class="er-box">
      <p class="eli-title">
        <span v-for="(item,index) in titleList" :class="isIndex == index?'on':''" @click="titleTab(index)">{{item}}</span>
      </p>
      <div class="city-box">
        <!--<group-title>-->
        <!--{{year7Value}}-->
        <!--<br>-->
        <!--{{$refs.picker1&&$refs.picker1.getNameValues()}}-->
        <!--</group-title>-->
        <picker :data='year7' :columns=3 v-model='year7Value' @on-change='change' ref="picker1"></picker>
      </div>
    </div>

  </div>
</template>

<script>
  import {GroupTitle, Picker} from 'vux'

  export default {
    name: 'evaluationcity',
    data() {
      return {
        isIndex: 0,
        titleVal: this.$store.state.list[2].answer[0] || '',
        titleList: this.$store.state.list[2].answer || [],
        cityVal: [],
        year7: [
          {
            name: '中国',
            value: 'china',
            parent: 0
          }, {
            name: '美国',
            value: 'USA',
            parent: 0
          }, {
            name: '广东',
            value: 'china001',
            parent: 'china'
          }, {
            name: '广西',
            value: 'china002',
            parent: 'china'
          }, {
            name: '美国001',
            value: 'usa001',
            parent: 'USA'
          }, {
            name: '美国002',
            value: 'usa002',
            parent: 'USA'
          }, {
            name: '广州',
            value: 'gz',
            parent: 'china001'
          }, {
            name: '深圳',
            value: 'sz',
            parent: 'china001'
          }, {
            name: '广西001',
            value: 'gc001',
            parent: 'china002'
          }, {
            name: '广西002',
            value: 'gc002',
            parent: 'china002'
          }, {
            name: '美国001_001',
            value: '0003',
            parent: 'usa001'
          }, {
            name: '美国001_002',
            value: '0004',
            parent: 'usa001'
          }, {
            name: '美国002_001',
            value: '0005',
            parent: 'usa002'
          }, {
            name: '美国002_002',
            value: '0006',
            parent: 'usa002'
          }
        ],
        year7Value: [],
        selectedValues: []
      }
    },
    created() {
      //this.initCityVal();
      this.updateCurrentAns();
    },
    components: {
      Picker,
      GroupTitle
    },
    computed: {
      initCityVal() {
        let tlist = this.titleList;
        let cityVal = [];
        for (let i = 0; i < tlist.length; i++) {
          cityVal.push({
            name: tlist[i],
            val: '',
            code: []
          });
        }
        return cityVal;
      }
    },
    mounted() {
      //this.getCityVal();
    },
    methods: {
      titleTab(index) {
        this.titleVal = this.titleList[index];
        this.isIndex = index;
        let cityVal = this.initCityVal;
        //update 对应 city组件值
        if (cityVal[index].code.length > 0) {
          this.year7Value = cityVal[index].code;
        } else {
          this.initCityVal[index].code = this.year7Value;
        }
        //this.updateCurrentAns();
      },
      change(value) {
        //console.log(value, this.$refs.picker1.getNameValues());
        let newArr = this.year7Value;
        let newIndex = this.isIndex;
        let cityVal = this.initCityVal;

        cityVal[newIndex].code = newArr;
//        this.getCityVal();
      },
      updateCurrentAns() {
        let cityVal = this.initCityVal;
        this.$store.state.currentAns.answer = cityVal;
        let strTpl = [];
        //console.log(this.cityVal);
        if (cityVal.length > 0) {
          for (let i = 0; i < cityVal.length; i++) {
            strTpl.push(cityVal[i].name + ':' + cityVal[i].val);
          }
        }
        this.$store.state.currentAns.answertpl = strTpl.join('<br/>');
      },
      getCityVal() {
        //let cvalStr = this.$refs.picker1 && this.$refs.picker1.getNameValues();
        //console.log(cvalStr.replace(/\s+/ig,','));
        //console.log(cvalStr.split(' '));

        this.cityVal[this.isIndex].code = this.year7Value;
        //this.cityVal[this.isIndex].val = cvalStr.split(' ');

      },
      mounted() {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
        })
      }


    }
  }
</script>


