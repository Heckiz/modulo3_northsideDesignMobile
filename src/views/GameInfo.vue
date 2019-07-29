<template>
<v-container >
  <v-layout>
    <v-flex >
      <h1>Game Info</h1>
      <h2>Fall Schedule</h2>

 <!-- Nav tabs -->

 <v-tabs dark centered color="#69F0AE" slider-color="#F44336" background-color="#00838F">
  <v-tab >OCTOBER</v-tab>
  <v-tab > SEPTEMBER</v-tab>
  <v-tab-item>
   <v-expansion-panels>
      <v-expansion-panel
        v-for="aux in matchSept"
        :key="aux.id"
      >
        <v-expansion-panel-header class="teams" style="font-size: 50px;"
        >{{aux.local}} vs {{aux.visit}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-tab-item>
  <v-tab-item>
    asd2
  </v-tab-item>  
</v-tabs>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import data from '../assets/JSON/data.json'
export default {
  name: 'about',
  components: {
  },
  data() {
    return {
    infoTeams: data.teams,
    matchOct: data.matchOctober,
    matchSept: data.matchSeptember,
  }
}
};
</script>

<style>
.teams{
color: rgb(27, 52, 97);
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
text-shadow: 2px 3px 3px rgb(49, 206, 44), 4px 5px black, -1px -1px  black;
border-top: 3px solid rgb(0, 0, 0);
width: 100%;
}
</style>
