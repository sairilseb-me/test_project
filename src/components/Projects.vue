<template>
    <div>
        <v-subheader>
            Projects
       </v-subheader>
       <v-divider></v-divider>
       <v-expansion-panels>
        <v-expansion-panel v-for="(data, index) in myData" :key="index">
            <v-expansion-panel-header>
                {{ data.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <h5>Due Date: {{ data.due_by }}</h5>
                <p>Status: {{ data.status }}</p>
            </v-expansion-panel-content>
        </v-expansion-panel>
       </v-expansion-panels>
    </div>
</template>


<script>
export default {
    data: () => ({
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
                },
                {
                    title: 'Order a Playstation 5',
                    person: 'Sairil Seberiaga',
                    due_by: 'October 21, 2022',
                    status: 'overdue'
                }
            ],
    }),
    computed: {
        myData(){
            return this.datas.filter(v => v.person == "Sairil Seberiaga");
        }
    }
}
</script>