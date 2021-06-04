<template>
    <v-container class="my-5">
    <v-layout column>
        <v-flex xs12 class="text-xs-center" mt-5>
            <h3>Sign Up</h3>
        </v-flex>

        <v-flex>
            <form @submit.prevent ="submitForm" type="post">
                <v-layout column>
                    <v-row >
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                    <v-flex>                        
                        <v-text-field
                            name="firstname"
                            label="First name"
                            id="fname"
                            v-model="fname"
                            type="firstname"
                            required></v-text-field>
                    </v-flex>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                    <v-flex>                        
                        <v-text-field
                            name="lastname"
                            label="Last name"
                            id="lname"
                            v-model="lname"
                            type="lastname"
                            required></v-text-field>
                    </v-flex>
                    </v-col>

                    <v-col cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-select
                            :items="gender"
                            :menu-props="{ top: true, offsetY: true }"
                            label="Gender"
                            id="gender"
                            v-model="gender"
                        ></v-select>
                    </v-col>
                    </v-row>

                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            id="birthday"
                            v-model="birthday"
                            label="Birthday"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="birthday"
                        @input="menu2 = false"
                    ></v-date-picker>
                    </v-menu>

                    <v-flex  cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                            name="email"
                            label="Email"
                            id="email"
                            v-model="email"
                            type="email"
                            required></v-text-field>
                    </v-flex>

                    <v-flex>
                        <v-text-field
                            name="username"
                            label="Username"
                            id="username"
                            v-model="username"
                            type="username"
                            required></v-text-field>
                    </v-flex>

                    <v-flex>
                        <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            v-model="password"
                            type="password"
                            required></v-text-field>
                    </v-flex>

                    <v-flex class="text-xs-center ">
                        <v-btn primary type="submit"
                            color="pink"
                            dark
                            >
                            Submit
                        </v-btn>
                    </v-flex>

                </v-layout>
            </form>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            on: undefined,
            
            gender: ['Female', 'Male', 'Other'],

            return: {
                fname: '',
                lname: '',
                gender: '',
                birthday: '',
                email: '',
                username: '',
                password: '',
                
            },
            
        }),

        methods: {
            submitForm() {
                this.$axios.post('http://localhost:8000/vueRegis', {
                    fname: this.fname,
                    lname: this.lname,
                    gender: this.gender,
                    birthday: this.birthday,
                    email: this.email,
                    username: this.username,
                    password: this.password
                })
                console.log('Welcome!')
                //this.$axios.post('/api/user')
            }
        }
    }
</script>