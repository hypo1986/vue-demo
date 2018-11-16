<style lang="less">
  .index{
    background-color: #f0f0f1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<template>
<div class="index">
  <div v-bind:class="activeObj">
    {{text}}
    <span v-if="isActive">one</span><span v-else>two</span>
    <i v-for="arr in arrs" :name="arr.name" v-if="arr.age<30">{{arr.age}}</i>
  </div>
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ msgNewVal }}</p>
  <div id='example-3'>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <input type="checkbox" id="checkbox" value="2" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>


  <todos :keys="arrs"></todos>
  <div id="demo">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>

</div>
</template>

<script>
  import Todos from '../components/Todos.vue';

  export default {
    data () {
      return {
        show:true,
        checked:false,
        text:'input:',
        message:'0',
        checkedNames:[],
        isActive:true,
        error:null,
        arrs:[{name:'aaaa',age:'20'},{name:'bbb',age:'30'}]
      }
    },
    components:{
      Todos
    },
    computed: {
      activeObj:function () {
        return {
          active:this.isActive && !this.error
        }
      },
      msgNewVal: function () {
        return this.changeVal(this.message);
      }

    },
    methods: {
      changeVal(val){
        return (val|0)*2;
      }
    },
    watch:{
//      message: function () {
//        this.changeVal(this.message);
//      }
    }
  }
</script>
