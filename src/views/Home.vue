<template>
<v-container grid-list-md >
<h1 >Upcoming Evetns</h1>
 <v-layout column>
  <v-flex v-for="(item, i) in events" :key="i">
     <v-card :color="item.color" dark >
            <v-list-item three-line>
              <v-list-item-content >
                <v-list-item-title class="headline mb-2" v-text="item.date"></v-list-item-title>
                <v-list-item-subtitle v-text="item.info"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
     </v-card>
  </v-flex>
 </v-layout>
</v-container>
</template>

<script>
import data from '../assets/JSON/data.json'
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
     events: data.upcomingEvent
    
    }
}
};
</script>
