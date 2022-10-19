<template>
    <nav>
       <v-app-bar flat class="grey lighten-4">
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text small color="grey" class="mx-2">
                <span>Sign Out</span>
                <v-icon right>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>
       </v-app-bar>
    </nav>
</template>

<script>

export default {
    data(){
        return{

        }
    }
}
</script>