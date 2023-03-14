<template>
  <h1>Counter -Vuex</h1>

  <!-- <h2>Direct access:{{$store.state.count}}</h2> -->
  <!-- <h2>Computed:{{countComputed}}</h2> -->
   <h2>{{countComputed}}</h2>
  <h2>MapState:{{$store.state.counter.count}}</h2>
  <h2>Last Mutation:  {{lastMutation}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button v-if="!isLoading" @click="incrementRandomInt">Random</button>
  
  <h2>Direct getter : {{$store.getters['counter/squareCount']}}</h2>

</template>

<script>

import {mapState,mapActions,mapGetters} from 'vuex'
export default {


data(){
  return{
      disponible:true
  }
},
methods:{
  increment(){
      this.$store.commit('counter/increment')
  },
  incrementBy(){
    
 
    this.$store.commit('counter/incrementBy',5);
  },
 
  ...mapActions('counter',['incrementRandomInt'])
},
computed:{
  countComputed(){
    return this.$store.state.counter.count+1
  },
  ...mapState('counter',['count','lastMutation','isLoading'])
}}




</script>

<style>

</style>