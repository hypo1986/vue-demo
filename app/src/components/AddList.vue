<template>
  <div>
    <input placeholder="add text" v-model="newText" @keyup.enter="addNew">
    <ul>
      <li v-for="(item,index) in flists" v-bind:id="item.id">
        {{item.text}}
        <button @click="removeThis(index)">X</button>
      </li>
    </ul>
    <div v-show="isLast">最多添加5条</div>
  </div>
</template>

<script>
  export default {
    name: 'addlist',
    props: {
      flists:{
        type: Array,
        default:[]
      }
    },
    methods: {
      removeThis(index){
        this.flists.splice(index,1)
        if(index<5){
          this.isLast = false;
        }
      },
      addNew(){
        let newId = this.flists.length + 1;
        if(newId < 6){
          this.flists.push({
            id:newId,
            text:this.newText
          })
          this.newText = '';
        }else{
          this.isLast = true;
        }

      }
    },
    computed: {

    },
    data() {
      return {
        isLast:false,
        newText:'',
        lists:[
          {
            id:1,
            text:'111111111111'
          },
          {
            id:2,
            text:'222222222222'
          }
        ]
      }
    }
  }
</script>

<style lang="less" type="text/less">

</style>
