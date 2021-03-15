<template>
  <v-container>
    <v-form >
        <v-text-field name="message" placeholder="Enter message" v-model="newMessage"
         :append-outer-icon="message ? 'send' : 'send'" @keyup.enter="createMessage" @click:append-outer="createMessage"/>
             <v-alert dense text v-if="errorText" type="error" color="#f64000"> {{errorText}}</v-alert>
    </v-form>
  </v-container>
</template>

<script>
import fb from "@/firebase/init";
export default {
  name: "CreateMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        fb.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "A message must be entered first";
      }
    }
  }
};
</script>
