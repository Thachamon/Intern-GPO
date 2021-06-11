<template>
    <div>
        <v-app>
            <v-app-bar app color="brown darken-1" dark>
                <v-icon large color="orange accent-1">mdi-skull</v-icon>
                <div style="font-size: 1.5em">About</div>
                <v-spacer></v-spacer>
            </v-app-bar>

            <v-main>
                <HelloWorld />
            </v-main>
        </v-app>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//import SignUp from './components/SignUp'

export default {
    name: 'About',

    components: {
        HelloWorld,
        //SignUp,
    },

    data: () => ({}),
}
</script>
