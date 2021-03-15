<template>
    <v-content>
      <v-container fluid >
        <v-layout align-center justify-center >
          <v-flex xs12 sm8  md4>
            <v-card class="elevation-12">
              <v-toolbar color="#01579B" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email" v-model="email" prepend-icon="person" type="text"/>
                  <v-text-field id="password" label="Password"  v-model="password" prepend-icon="lock" type="password"/>
                </v-form>
                <v-btn color="#01579B" block dark @click="socialLogin">or Sign In with Google <v-spacer/>
 <img id="logoGoogle" alt="Google Logo" src="../assets/Images/google-logo.png"></v-btn>
                <br>
                <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#01579B" dark @click="login">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  import firebase from 'firebase';
import toastr from 'toastr';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            toastr.success('Logged');
            this.$router.replace('usernameLogin')
          },
          (err) => {
            toastr.error('The wrong username or password')
          }
        );
       
      },  socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
          toastr.success('Logged');
          this.$router.replace('usernameLogin');
        }).catch((err) => {
          toastr.error('Oops. ' + err.message)
        });
      }
    }
  }
</script>

<style >  
#logoGoogle{
  width: 30px;
  height: 30px;
}
</style>