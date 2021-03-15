<template>
    <v-container class="chat">
        <v-card class="elevation-12">
              <v-toolbar color="#01579B" dark flat>
                <v-toolbar-title>NYLS CHAT</v-toolbar-title>
                <v-spacer></v-spacer>
              <v-btn @click="logout" color="#f64000" dark right>Logout</v-btn>

              </v-toolbar>
            <v-card-text>
            <p class="text-secondary nomessages" v-if="messages.length == 0">[No messages yet!]</p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <strong >[{{ message.name }}]: </strong>
                        <span>{{message.message}}</span>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
                                <createMessage :name="name"/>

            </v-card-text>
        </v-card>
    </v-container>

</template>

<script>
import createMessage from '../components/createMessage';
import fb from '../firebase/init';
import fire from 'firebase';
import moment from 'moment';

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        createMessage
    },
    data() {
        return {
            messages: []
        }
    },
    methods:{
    logout: function() {
      fire.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    },
    created() {
        let ref = fb.collection('messages').orderBy('timestamp');

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type = 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
        });
    }
}
</script>

<style>
.chat strong{
    color: aqua;
    font-size: 20px;

}
.chat span{
    font-size: 1.2em;
    color: black;
}


.chat .time{
    display: block;
    font-size: 0.7em;
}

.messages{
    max-height: 250px;
    overflow: auto;
}
</style>
