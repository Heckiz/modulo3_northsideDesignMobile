<template>
<v-container class="content">
     <v-layout>
     <v-flex>
       <v-toolbar color="#c95e43" dark flat>
         <div class="headline title2" block>Fall Schedule</div>
      <!-- POSITION TABLE -->

      
      <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on }">
             <v-btn v-on="on" absolute dark fab  right color="#black">
              <v-icon>format_align_justify</v-icon>
            </v-btn>
        </template>

        <v-card>
          <v-toolbar color="#d4ca4d"  flat>
          <strong class="font-weight-black mx-auto headline" >Positions table</strong>
          </v-toolbar >
          
        <v-card-text >
        <v-simple-table dense dark >
        <thead><tr><th >Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th></tr></thead>
        <tbody  v-for="team in infoTeams" :key="team.name">
        <tr>
        <td >{{ team.name }}</td>
        <td>{{ team.points }}</td>
        <td>{{ team.wins }}</td>
        <td>{{ team.draws }}</td>
        <td>{{ team.losses }}</td>
        <td>{{ team.goalsFor }}</td>
        <td>{{ team.goalsAgainst }}</td>
        </tr>
        </tbody>
        </v-simple-table>
        </v-card-text>
        
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#564c40"  text @click="dialog = false">CLOSE</v-btn>
          </v-card-actions>

      </v-card>
      </v-dialog>
        <!-------------------------->
      </v-toolbar>

<!--Month Filter  -->
<v-row align="center">
<v-col cols="6">
<v-select 
          v-model="monthSelect"
          :items="months"
          item-text="month"
          item-value="value"
          return-object
></v-select>
        </v-col>

<!-------------------------->
 <!--Team Filter -->
<v-col cols="6">
<v-select
          v-model="teamSelect"
          :items="teams"
          item-text="team"
          item-value="value"
          return-object
></v-select>
</v-col>
</v-row>
<!-------------------------->
<div class="panel">

<div pb-6 v-for="(aux,index) in matchFilter" :key="index">
      <matches v-bind="aux" />
</div>
</div>

    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import matches from '../components/matches'
import data from '../assets/JSON/data.json'
export default {
  name: 'about',
  components: { 
    matches
  },
  data() {
    return {

    // position table //
    overlay: false,
    zIndex: 0,
    dialog: false,
    infoTeams: data.teams,
    matches:data.matches,
     // v-select month //
     monthSelect:{ month:"September", value: "09"},
     months:[{ month:"September", value: "09"},
             { month:"October", value: "10"}],
     // v-select team//
    teamSelect: { team: 'All', value: 'all' },
        teams: [
          { team: 'All', value: 'all'},
          { team: 'U1', value: 'U1' },
          { team: 'U2', value: 'U2' },
          { team: 'U3', value: 'U3' },
          { team: 'U4', value: 'U4' },
          { team: 'U5', value: 'U5' },
          { team: 'U6', value: 'U6' },
        ],
  }},computed:{
    matchFilter: function(){
      let month= this.monthSelect.value;
      let team= this.teamSelect.value;

       return this.matches.filter(function(match) {
          return  (match.month === month) && (team === 'all'  || match.local === team || match.visit === team);
        });
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
.time{
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: none;
  font-size: 20px;
}
.panel{
  padding-bottom: 45px;
}

</style>
