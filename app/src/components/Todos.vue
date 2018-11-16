<template>
  <div>
    <li v-for="item in keys">
      {{item.name +'--'+ item.age}}
    </li>
    <div v-for="it in flist">{{it.text}}</div>
    <add-list :flists="flist"></add-list>
  </div>
</template>

<script>
  import AddList from '../components/AddList.vue';
  export default {
    name: 'todo',
    props: {
      keys:{
        type: Array,
        default:[]
      }
    },
    methods: {

    },
    components: {
      AddList
    },
    data() {
      return {
        flist:[
          {
            id:1,
            text:'f111111111111'
          },
          {
            id:2,
            text:'f222222222222'
          }
        ]
      }
    }
  }
</script>

<style lang="less" type="text/less">

</style>
