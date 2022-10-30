<template>
    <div>
       <v-subheader>
            Dashboard
       </v-subheader>
       <v-divider></v-divider>
       <v-container class="my-5">
        <v-row class="mb-5">
            <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                    <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on"><v-icon left small>
                    mdi-folder
                    </v-icon><span class="caption text-lowercase">By Project Name</span></v-btn>
                </template>
                <span>Sort by projects</span>
            </v-tooltip>
            
            <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                    <v-btn small text color="grey"  @click="sortBy('person')" v-on="on" v-bind="attrs"><v-icon left small>
                        mdi-account
                    </v-icon><span class="caption text-lowercase">By Person</span></v-btn>
                </template>
                <span>Sort by Person</span>
            </v-tooltip>
            
        </v-row>
        <v-card flat class="text-xs-center" v-for="(data, index) in datas" :key="index">
            <v-row :class="`project ${data.status}`">
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
                    <div class="mt-6 right">
                        <v-chip :class="`white--text caption chip ${data.status} px-4 font-weight-800`">{{ data.status }}</v-chip>
                    </div>
                </v-col>
            </v-row>
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
                    status: 'complete'
                },
                {
                    title: 'Check on passport',
                    person: 'Jermaine Laurie Seberiaga',
                    due_by: 'March 21, 2022',
                    status: 'ongoing'
                },
                {
                    title: 'Shout at the children',
                    person: 'Jerlyn Ramos',
                    due_by: 'October 21, 2022',
                    status: 'overdue'
                }
            ],
        }
    },
    methods: {
        sortBy(value){
            if(value === 'title'){
                this.datas.sort((a,b)=>{
                    let ta = a.title.toLowerCase(), tb = b.title.toLowerCase();
                    
                    if(ta < tb){
                        return -1;
                    }

                    if(ta > tb){
                        return 1;
                    }

                    return 0
                })
            }

            if(value === 'person'){
                this.datas.sort((a, b)=>{
                    let pa = a.person.toLowerCase(), pb = b.person.toLowerCase();

                    if(pa < pb){
                        return -1
                    }

                    if(pa > pb){
                        return 1;
                    }

                    return 0;
                })
            }
        }
    }
}
</script>

<style scoped>
    .project.complete{
        border-left: 4px solid #3cd1c2;
    }

    .project.ongoing{
        border-left: 4px solid orange;
    }

    .project.overdue{
        border-left: 4px solid red;
    }

    .chip.complete{
        background: #3cd1c2;
    }

    .chip.ongoing{
        background: tomato;
    }

    .chip.overdue{
        background: red;
    }
</style>