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
       <v-navigation-drawer app v-model="drawer" class="grey lighten-4">
        <div class="d-flex justify-end">
            <v-btn text @click="triggerDrawer">
                <v-icon>
                    mdi-close
                </v-icon>
           </v-btn>
        </div>
        <v-list>
            <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
                <v-list-item-icon>
                    <v-icon>
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title  class="text-capitalize">
                       {{ link.title }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
       </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data(){
        return{
            drawer: false,
            links: [
                {
                    title: 'dashboard',
                    icon: 'mdi-view-dashboard',
                    route: '/'
                },
                {
                    title: 'about us',
                    icon: 'mdi-information',
                    route: '/about'
                },
                {
                    title: 'projects',
                    icon: 'mdi-folder',
                    route: '/projects'
                },
                {
                    title: 'teams',
                    icon: 'mdi-microsoft-teams',
                    route: '/teams'
                }
            ],
        }
    },
    methods: {
        triggerDrawer(){
            this.drawer = !this.drawer
        }
    }
}
</script>