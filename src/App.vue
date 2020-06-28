<template>
  <div id="app">
    <Footer/>
    <router-view></router-view>
  </div>
</template>

<script>

import Footer from './components/Footer'
export default {
  name: 'App',
  mounted(){
    this.$store.dispatch('autoLogin')
    },
  components: {
    Footer
  }
}
</script>

<style>
#app {
 width: 100%;
 height: 100%;
}
</style>
