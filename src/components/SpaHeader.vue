<template>
  <nav class="header">
    <div class="header_wrapper">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SpaHeader"
}
</script>

<style scoped>

/*nav {*/
/*  padding: 30px;*/
/*}*/
.header{
  position: fixed;
  top: 0;
  left: 0;
  background-color: cadetblue;
  width: 100%;
  text-align: center;
}
.header_wrapper{
  width: 60%;
  margin: 0 auto;
  display: flex;

}
nav a {
  font-weight: bold;
  font-size: 30px;
  color: #2c3e50;
  margin-left: 10%;
  transition: all .2s ease;
  text-decoration: none;
}
nav a:hover{
  color: aqua;
  transform: scale(1.5);
}
/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
