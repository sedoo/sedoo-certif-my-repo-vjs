<template>
    <v-app class="grey lighten-4">
        <NavigationBar />
        <v-content class="mx-4 mb-4 my-2">
            <router-view></router-view>            
        </v-content>
    </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
    name: "App",
    components: {NavigationBar},
    data () {
        return {

        }
    }
    
}
</script>

