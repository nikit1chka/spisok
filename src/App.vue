<template>
  <div class="App">
  <div class="header">
  <SpaHeader/>
  </div>
  <div class="content">
  <router-view/>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  margin-top: 30px;
}


</style>
<script>

import SpaHeader from "@/components/SpaHeader";

export default {
  components: {SpaHeader},
}
</script>
