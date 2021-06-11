<template>
    <div class="register">
        <v-app>
            <v-app-bar app color="brown darken-1" dark>
                <v-icon large color="orange accent-1">mdi-skull</v-icon>
                <div style="font-size: 1.5em">Register Account</div>
                <v-spacer></v-spacer>
            </v-app-bar>

            <v-main>
                <SignUp />
            </v-main>
        </v-app>
    </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'

export default {
    name: 'Register',

    components: {
        SignUp,
    },
}
</script>
