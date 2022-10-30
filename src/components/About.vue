<template>
    <div>
        <v-subheader>
            About Us
       </v-subheader>
       <v-divider></v-divider>
        <div>
            <v-container class="white my-3">
                <h3 class="my-2">Data Submission</h3>
                <v-divider></v-divider>
                <v-card class="mx-3 my-2" flat outlined>
                    <v-row>
                        <v-col cols="12" class="white">
                            <v-divider></v-divider>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field label="First Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Middle Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field label="Last Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field label="Address"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </div>
    </div>
</template>