<template>
    <div>
        <v-subheader>
            Teams
       </v-subheader>
       <v-divider></v-divider>
       <v-container>
           <v-row>
               <v-col cols="6" md="4" sm="6" v-for="(team, index) in teams" :key="index">
                    <v-card flat class="text-center pa-3">
                        <v-card-title><span class="text-center">Name: {{ team.name }}</span></v-card-title>
                        <v-divider></v-divider>
                        <v-card-subtitle>Role: {{ team.role }}</v-card-subtitle>
                    </v-card>
               </v-col>
           </v-row>
       </v-container>
    </div>
</template>

<script>
export default {
   data(){
    return {
        teams: [
            {
                name: "Sairil Seberiaga",
                role: "Web Developer"
            },
            {
                name: "Jermaine Laurie Seberiaga",
                role: "Graphics Designer"
            },
            {
                name: "Jeryn Ramos",
                role: "Atchay"
            },
            {
                name: "Daniel Gepolongca",
                role: "Manug Sabad"
            },
            {
                name: "Jay Ann Morada",
                role: "Muse"
            }
        ]
    }
   }
}
</script>