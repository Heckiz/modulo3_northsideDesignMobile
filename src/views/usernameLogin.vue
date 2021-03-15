<template>
  <v-container fluid >
    <v-layout align-center justify-center>
    <v-flex>
  <v-card class="elevation-15" >
     <v-toolbar color="#01579B"  dark flat>

             <v-toolbar-title>What is your name?</v-toolbar-title>
              <v-spacer></v-spacer>
     </v-toolbar>
            <v-card-text>

              <v-form @submit.prevent="login" class="text-center">
               <v-spacer></v-spacer>
             <v-text-field name="name" v-model="name" prepend-icon="create" type="text" placeholder="Username" @keyup.enter="login"/>
             <v-alert dense text v-if="errorText" type="error" color="#f64000"> {{errorText}}</v-alert>
              </v-form>

            </v-card-text>
            <v-card-actions>
            <v-btn block color="#01579B"  dark @click="login">Enter chat</v-btn>
            </v-card-actions>
            <v-card-actions>
            <v-btn @click="logout" block dark color="#f64000" >Logout</v-btn>
            </v-card-actions>

  </v-card>

  </v-flex>
  </v-layout>
  </v-container>

</template>

<script>
import fb from 'firebase'
export default {
  name: "login",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.errorText = "Please enter a name first";
      }
    },
      logout: function() {
      fb.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
  }
};
</script>

<style>

</style>