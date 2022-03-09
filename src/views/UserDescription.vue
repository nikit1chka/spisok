<template>
<div class="user_description">
  <button class="ext_btn" @click="$emit('exitDescription'),$router.push({name:'home'})">
    exit
  </button>
  <h1><slot name="name"></slot></h1>
  <h2>ADDRESS:</h2>
  <ul>
    <li>STREET:<slot name="street">jjjj</slot></li>
    <li>SUITE:<slot name="suite"></slot></li>
    <li>CITY:<slot name="city"></slot></li>
    <li>ZIPCODE:<slot name="zipcode"></slot></li>
  </ul>
  <h2>COMPANY:</h2>
  <ul>
    <li>NAME:<slot name="name_company"></slot></li>
    <li>CATCH PHRASE:<slot name="catch_phrase"></slot></li>
  </ul>
  <h2>PHONE: <slot name="phone"></slot></h2>
  <h2>WEBSITE: <slot name="website"></slot></h2>
</div>
</template>

<script>
export default {
  name: "UserDescription",
}

</script>

<style scoped>
  .user_description{
    position: fixed;
    background-color: darkslategray;
    color: white;
    width: 500px;
    height: 500px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    padding: 50px;
    border: 2px solid darkseagreen;
    text-align: left;
  }
  @media (max-width: 900px) {
    .user_description{
      width: 300px;
    }
  }
  .ext_btn{
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: 2px solid white;
    color: white;
    height: 40px;
    width: 50px;
    cursor: pointer;
    font-size: 16px;
  }
  .ext_btn:hover{
    color: brown;
    border: 3px solid brown;
  }
</style>
