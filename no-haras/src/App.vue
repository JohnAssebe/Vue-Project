<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './component/home.vue'
export default {
  
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    'home':Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
