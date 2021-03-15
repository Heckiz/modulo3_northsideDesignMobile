<template>
<v-app >
<v-container grid-list-md class="content">
<v-layout column>
<v-toolbar color="#c95e43" dark flat>
<div class="headline title2" block>Upcoming Evetns</div>
<v-spacer/>

    <!-- MORE INFO -->
<v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ on }">
        <v-btn color="black"  absolute dark fab right v-on="on">
          <v-icon x-large>help_outline</v-icon>
        </v-btn>
      </template>
 <v-sheet class="text-center" dark color="black" height="55px">
   <!------------ ABOUT ------------>
    <v-dialog v-model="about" width="500">
    <template v-slot:activator="{ on }">
        <v-btn color="black" dark  v-on="on">
          <v-icon x-large>priority_high</v-icon>
        </v-btn>
    </template>

      <v-card class="elevation-12">
         <v-card-title class="headline grey lighten-2" primary-title>
         <strong class="font-weight-black mx-auto headline">NYSL ABOUT</strong>
        </v-card-title>
        <v-card-text>
          <h4>Mission</h4>
To support young athletes living in Chicago´s northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skill related to the game of soccer, specifically those skills around team cooperation and good sportsmanship
          <h4>Vision</h4>
The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership
          <h4>General Information</h4>
The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago´s northside neighborhoods an evironment in thich to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhoods. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="#7c39b7" text @click="about = false">OK</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
<!-- ----------------------------------------------------------- -->
<strong class="subheading subtitle-2">©2019|All Rights Reserved</strong>

<!-- CONTACT -->
    <v-dialog v-model="contact" width="600">
    <template v-slot:activator="{ on }">
        <v-btn color="black" dark   v-on="on">
          <v-icon x-large>call</v-icon>
        </v-btn>
    </template>

      <v-card class="elevation-12">
           <v-card-title class="headline grey lighten-2" primary-title>
         <strong class="font-weight-black mx-auto headline">CONTACT</strong>
        </v-card-title>
        <v-card-text>
Please email us <a href="mailto:nysl@chilsoccer.org">nysl@chilsoccer.org</a>
We will reply to your email as soon as we can.
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#7c39b7" text @click="contact = false">OK</v-btn>
        </v-card-actions>
      </v-card>

  </v-dialog>
<!-- ----------------------------------------------------------- -->
    </v-sheet>
    </v-bottom-sheet>
</v-toolbar>
<!-- ----------------------------------------------------------- -->
 <hr>

    <v-flex  v-for="(item, i) in events" :key="i">
     <v-card :color="item.color" dark >
            <v-list-item three-line>
              <v-list-item-content >
                <v-list-item-title class="headline mb-2" v-text="item.date"></v-list-item-title>
                <v-list-item-subtitle v-text="item.info"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
     </v-card>
    </v-flex>
     <hr>
 </v-layout>
</v-container>
</v-app>
</template>

<script>
import data from '../assets/JSON/data.json'
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
    sheet: false,
     about: false,
     contact:false,
     events: data.upcomingEvent
    
    }
}
};
</script>
<style>


</style>