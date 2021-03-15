<template>
    <v-content>
      <v-container fluid >
        <v-layout align-center justify-center >
          <v-flex >
            <v-card class="elevation-12">
              <v-toolbar color="#01579B" dark flat>
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email" v-model="email" prepend-icon="person" type="text"/>
                  <v-text-field id="password" label="Password"  v-model="password" prepend-icon="lock" type="password"/>
                </v-form>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#01579B" dark @click="signUp">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

 <script>
  import firebase from 'firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
           toastr.success('Logged');
            this.$router.replace('home')
          },
          (err) => {
            toastr.error('The wrong username or password')

          }
        );
        
      }
    }
  }
</script>

 <style >

</style>