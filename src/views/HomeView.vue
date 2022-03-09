<template>
  <div class="home">
    <h1>{{allName}}</h1>
    <div class="all_users">
    <div class="list_item" v-for="user in allUsers" :key="user.id" @click="showerDescription(user)">
      <h1>{{user.name}}</h1>
      <p>{{user.username}}</p>
      <p>{{user.email}}</p>
    </div>
  </div>
    <user-description v-if="showDescription" @exitDescription="exitDescription">
      <template v-slot:name>{{userName}}</template>
      <template v-slot:street>{{userDescription.address.street}}</template>
      <template v-slot:suite>{{userDescription.address.suite}}</template>
      <template v-slot:city>{{userDescription.address.city}}</template>
      <template v-slot:zipcode>{{userDescription.address.zipcode}}</template>
      <template v-slot:name_company>{{userDescription.company.name}}</template>
      <template v-slot:catch_phrase>{{userDescription.company.catchPhrase}}</template>
      <template v-slot:phone>{{userDescription.phone}}</template>
      <template v-slot:website>{{userDescription.website}}</template>
    </user-description>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import UserDescription from "@/views/UserDescription";

export default {

  name: 'HomeView',
  components: {
    UserDescription
  },
  data(){
    return{
      showDescription: false,
      userDescription:null,
      userName:'',
    }
  },
  computed: mapGetters(['allUsers','allName']),
  methods:{...mapActions(['fetchUsers']),
    exitDescription(){
      this.showDescription=false
    },
    showerDescription(user){
    this.showDescription=true
      this.userName=user.name
      this.userDescription=user
      this.$router.push({name:'user',params:{id:user.id}});
    }
  },
  inject:['postList'],
  mounted() {
    this.fetchUsers(10)
  }
}
</script>

<style>
.home{
  margin-top: 90px;
}
.all_users{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list_item{
  border: 2px solid tan;
  margin-bottom: 15px;
  cursor: pointer;
  width: 40%;
  margin-left: 10px;
  padding: 10px;
}
.list_item:hover{
  background-color: darkseagreen;
}
</style>
