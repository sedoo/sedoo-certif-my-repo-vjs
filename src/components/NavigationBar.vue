<template>
    <nav>
        <v-toolbar flat app color="grey lighten-2 grey--text">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase" >
                <span class="font-weight-light">CertifMy</span>REPO
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>   

        <v-navigation-drawer app class="accent" v-model="drawer">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.label" router :to="link.route" class="tile">
                      <v-list-tile-action >
                            <v-icon class="white--text">{{link.icon}}</v-icon>
                        </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{link.label}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>


<script>



export default {
    data() {
        return {
            drawer : false,
            links : [{label:"My repositories", route: '/repositories', icon: 'storage'},{label:"My Profile", route: "/profile", icon: 'person'}]
        }
    }
} 
</script>

<style scoped>
  .tile:hover {
    background: var(--v-accent-lighten2)
  }
</style>