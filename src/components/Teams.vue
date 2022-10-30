<template>
    <div>
        <v-subheader>
            Teams
       </v-subheader>
       <v-divider></v-divider>
       <v-container>
           <v-row>
               <v-col cols="6" md="4" sm="6" v-for="(team, index) in teams" :key="index">
                    <v-card class="text-center pa-3">
                        <v-avatar color="purple">
                            <v-icon dark size="48">
                                mdi-account-circle
                            </v-icon>
                        </v-avatar>
                        <v-card-title><span class="text-center">Name: {{ team.name }}</span></v-card-title>
                        <v-divider></v-divider>
                        <v-card-subtitle>Role: {{ team.role }}</v-card-subtitle>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn depressed outlined dark color="purple" ><v-icon left>mdi-message</v-icon> Message</v-btn>
                        </v-card-actions>
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