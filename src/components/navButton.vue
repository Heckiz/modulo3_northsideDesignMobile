<template>
    <v-container>
        <v-bottom-navigation
  id="navButton"
  grow
  >
    <v-btn to="/" style="height:max-content;"> 
      <v-icon x-large>home</v-icon>
    </v-btn>

    <v-btn to="/gameinfo" style="height:max-content;">
      <v-icon x-large>calendar_today</v-icon>
    </v-btn>
    <v-btn to="/gallery" style="height:max-content;">
      <v-icon x-large>insert_photo</v-icon>
    </v-btn>
     <v-btn to="/usernameLogin" style="height:max-content;">
      <v-icon x-large>comment</v-icon>
    </v-btn>
   
  </v-bottom-navigation>
  <router-view/>
    </v-container>
</template>

<script>

export default {
  name: 'navButton',
  components: {
  },
  data() {
    return {
    
    }
}
};
</script>

<style>
#navButton{
    bottom:0px;
    width: 100%;
    position: fixed;
    color:seagreen;
    font-family: 'Times New Roman', Times, serif; 
    z-index: 100;
    border-top: 10px solid #163358;
    }


</style>
