<template>
    <div>
       <v-subheader>
            Dashboard
       </v-subheader>
       <v-divider></v-divider>
       <v-container class="my-5">
        <v-card class="pa-3">
             <v-card flat class="text-xs-center">
                <v-row v-for="(data, index) in datas" :key="index">
                    <v-col cols="12" md="6" sm="12">
                        <p class="subheading grey--text">Project Title</p>
                        <p>{{ data.title }}</p>
                    </v-col>
                    <v-col cols="6" md="2" sm="2">
                        <p class="subheading grey--text">Person</p>
                        <p>{{ data.person }}</p>
                    </v-col>
                    <v-col cols="6" md="2" sm="2">
                        <p class="subheading grey--text">Due Date:</p>
                        <p>{{ data.due_by }}</p>
                    </v-col>
                    <v-col cols="12" md="2" sm="2">
                        <p class="subheading grey--text">Status</p>
                        <p>{{ data.status }}</p>
                    </v-col>
                </v-row>
             </v-card>
        </v-card>
       </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    title: 'Create a new website',
                    person: 'Sairil Seberiaga',
                    due_by: 'September 14, 2021',
                    status: 'On-Going'
                },
                {
                    title: 'Check on passport',
                    person: 'Jermaine Laurie Seberiaga',
                    due_by: 'March 21, 2022',
                    status: 'On-Going'
                },
                {
                    title: 'Shout at the children',
                    person: 'Jerlyn Ramos',
                    due_by: 'October 21, 2022',
                    status: 'On-Going'
                }
            ],
        }
    }
}
</script>