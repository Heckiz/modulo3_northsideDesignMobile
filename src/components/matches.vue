<template>
<v-expansion-panels >
  <v-expansion-panel >
        <v-expansion-panel-header class="teams" style="font-size: 50px;">
          {{local}} vs {{visit}}
        </v-expansion-panel-header>
        <!-- Team info table -->
        <v-expansion-panel-content style="margin:0px;">
        <v-simple-table dense dark my-auto>
        <thead><tr><th >Team</th><th>P</th><th>W</th><th>D</th><th>L</th></tr></thead>
        <tbody  v-for="team in infoTeams" :key="team.name">
        <tr  v-if="local==team.name||visit==team.name">
        <td >{{ team.name }}</td>
        <td>{{ team.points }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.draws }}</td>
        <td>{{ team.losses }}</td>
        </tr>
        </tbody>
        </v-simple-table>
        </v-expansion-panel-content>
        <!-- Location info -->
        <v-expansion-panel class="time">

        <v-expansion-panel-header  style="font-size: 20px;">
        <v-row>
          <div><v-icon>insert_invitation</v-icon>{{month}}/{{day}}</div>
          <div><v-icon>watch_later</v-icon>{{time}}</div>
          <div><v-icon>place</v-icon>{{place}}</div>
        </v-row>
        </v-expansion-panel-header>
<div v-for="address in location" :key="address.id"> 
   <v-expansion-panel-content  v-if="address.name==place" > 

<a  :href="address.mapURL" target="_blank">
  <iframe class="iframe" v-bind:src="address.mapEmbed" height="150" width="250" frameborder="0" style="border:0" ></iframe>
</a>
<v-spacer/>
<v-sheet color="orange lighten-2">{{address.address}}</v-sheet>

  </v-expansion-panel-content>
</div>
    </v-expansion-panel>
     <!------------------------>
  </v-expansion-panel>
  </v-expansion-panels>  
</template>

<script>
import data from '../assets/JSON/data.json'
export default {
  props:{
      id: String,
      local: String,
      visit: String,
      month: String,
      day: String,
      time: String,
      place: String,
  },
  name: 'matches',
  components: { 
  },
  data() {
    return {
    infoTeams: data.teams,
    location: data.location,

  }
  
 
}
};
</script>


<style>

</style>