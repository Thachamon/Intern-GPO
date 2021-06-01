<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <User name="Chuck Norris" bio="The strongest man in the world" />
  </div>
</template>
-->
<!-- Slot -->
<template>
  <div id="app">

  <img alt="Vue logo" src="./assets/logo.png">

  <User name="Chuck Norris">
    <p>The strongest man in the world!</p>
  </User>
  </div>
</template>

<!--
<script>
 import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->
<script>
import User from './components/User.vue'

export default {
  name: 'app',
  components: {
    User
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
  margin-top: 60px;
}
</style>
