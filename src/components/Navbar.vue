<template>
    <nav>
       <v-app-bar flat class="grey lighten-4">
            <v-app-bar-nav-icon @click="triggerDrawer" class="grey--text"></v-app-bar-nav-icon>
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
       <v-navigation-drawer app v-model="drawer" class="grey lighten-3">
        <div class="d-flex justify-end">
            <v-btn text @click="triggerDrawer">
                <v-icon>
                    mdi-close
                </v-icon>
           </v-btn>
        </div>
           
       </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data(){
        return{
            drawer: false,
        }
    },
    methods: {
        triggerDrawer(){
            this.drawer = !this.drawer
        }
    }
}
</script>