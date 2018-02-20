<template>
    <div>
       <p> 计数器：<button @click="minus">-</button></p>
        <p>当前{{$store.state.count}}</p>
      <p> 计数器：<button @click="add">+</button></p>
      <p>{{$store.getters.val}}22</p>

    </div>
</template>
<style>

</style>
<script>
  import * as Types from '../store/mutations-type';
  export default {
    data(){
      return {

      }
    },

    created(){

    },
    methods:{
      add(){
        this.$store.dispatch('add',3)
//        this.$store.commit(Types.INCREMENT,3);
      },
      minus(){
        this.$store.dispatch('minus',3);

      }

    }
  }


</script>
