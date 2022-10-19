<template>
    <div class="dashboard mx-5">
        <h1>Dashboard</h1>
        <v-btn depress elevation="10" dark class="pink px-5 mx-2">Click Me</v-btn>
        <v-btn outlined class="pink white--text px-5">Click Me</v-btn>

        <v-btn depressed class="pink white--text mx-2">
            <v-icon left>
                mdi-email
            </v-icon>
            <span>Email Me</span>
        </v-btn>

        <v-btn depressed dark color="purple" class="accent-6">
            <v-icon left>
                mdi-email
            </v-icon>
            <span>Email Me</span>
        </v-btn>

        <v-btn depressed fab dark small color="purple" class="accent-6 mx-2">
            <v-icon small>
                mdi-heart
            </v-icon>
        </v-btn>
    </div>
</template>