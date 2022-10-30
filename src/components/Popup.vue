<template>
    <v-dialog max-width="600px" persistent v-model="showModal">
        <template v-slot:activator="{on, attrs}">
            <v-btn v-bind="attrs" v-on="on">
                Add new Project
            </v-btn>
        </template>
        <v-card class="px-3 pt-3">
            <v-row class="justify-space-between">
                <v-card-title class="text-h5">New Project</v-card-title>
                <v-spacer></v-spacer>
                <span>
                    <v-btn text @click="closeModal">
                        <v-icon>
                            mdi-close-circle-outline
                        </v-icon>
                    </v-btn>
                </span>
            </v-row>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputTitleRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-information"></v-textarea>
                    <v-menu offset-y min-width="auto" :nudge-right="60">
                        <template v-slot:activator="{on, attrs}">
                            <v-text-field v-bind="attrs" v-on="on" label="Due Date" v-model="formattedDate" prepend-icon="mdi-calendar"></v-text-field>
                        </template>
                        <v-date-picker v-model="dueDate">
                        </v-date-picker>
                    </v-menu>
                    <div class="text-center">
                        <v-btn text class="primary px-10" @click="submit">Submit</v-btn>
                    </div>
                </v-form>
            </v-card-text>      
        </v-card>≈
    </v-dialog>
</template>

<script>

import moment  from 'moment';
import db from '../firebase';
export default {
    data: () => ({
        title: '',
        content: '',
        showModal: false,
        dueDate: null,
        inputTitleRules: [
            v => v.length >= 3 || 'Minimum character length is 3.',
        ],  
    }),
    methods: {
        closeModal(){
            this.showModal = false
        },
        async submit(){
            if(this.$refs.form.validate()){
                const project = {
                    title: this.title,
                    content: this.content,
                    due_date: this.dueDate,
                    person: 'Saiil Seberiaga',
                    status: 'completed'
                }

            db.collection('projects').add(project).then((docRef)=> {
                console.log(docRef);
            })
                
                this.closeModal();
                this.clearTextField()
            }
        },
        clearTextField(){
            this.title = '',
            this.content = '';
            this.dueDate = new Date(Date.now());
        },
       
    },
   computed: {
    formattedDate(){
            return this.dueDate ? moment(this.dueDate).format("MMM Do YYYY") : moment().format('LL');
        }
   }
}
</script>