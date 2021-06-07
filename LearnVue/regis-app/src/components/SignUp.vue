<template>
    <v-container class="my-5">
    <v-layout column>
        <v-flex>
            <v-form 
            ref="registerForm" 
            v-model="valid" 
            :lazy-validation="lazy">
                <v-layout column>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-flex>
                            <v-text-field
                                v-model="form.fname"
                                :rules="[rules.required]"
                                name="firstname"
                                label="First name"
                                type="firstname"
                                maxlength="20"
                                required
                            ></v-text-field>
                            </v-flex>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-flex>
                            <v-text-field
                                v-model="form.lname"
                                :rules="[rules.required]"
                                name="lastname"
                                label="Last name"
                                type="lastname"
                                maxlength="20"
                                required
                            ></v-text-field>
                            </v-flex>
                        </v-col>
                    </v-row>

                    <v-select
                        :rules="[rules.required]"
                        :items="gender"
                        :menu-props="{ top: true, offsetY: true }"
                        label="Gender"
                        v-model="form.gender"
                    ></v-select>

                    <v-menu
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="form.birthday"
                                :rules="[rules.required]"
                                label="Birthday"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="form.birthday" @input="menu2 = false"></v-date-picker>
                    </v-menu>

                    <v-flex cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="form.email"
                        :rules="emailRules"
                        name="email"
                        label="Email"
                        type="email"
                        required
                    ></v-text-field>
                    </v-flex>

                    <v-flex>
                    <v-text-field
                        v-model="form.username"
                        :rules="[rules.required]"
                        name="username"
                        label="Username"
                        type="username"
                        required
                    ></v-text-field>
                    </v-flex>

                    <v-flex>
                    <v-text-field
                        v-model="form.password"
                        name="password"
                        label="Password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        hint="At least 8 characters"
                        counter @click:append="show1 =!show1"
                        required
                    ></v-text-field>
                    </v-flex>

                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-flex class="text-xs-center ">
                            <v-btn 
                                x-large block
                                :disabled="!valid"
                                color="pink" 
                                v-on:click="submitForm" >
                                Submit
                            </v-btn>
                        </v-flex>
                    </v-col> 

                </v-layout>
            </v-form>

        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Register
                </v-card-title>
        
                <v-card-text>
                    Register is successful.
                </v-card-text>
        
                <v-divider></v-divider>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                    >
                    I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import VueSimpleAlert from "vue-simple-alert"
    Vue.use(VueAxios, axios)
    Vue.use(VueSimpleAlert)

    export default {
        data: () => ({
            on: undefined,
            gender: ["Female", "Male", "Other"],
            valid: true,
            
            form: {
            fname: "",    
            lname: "",
            gender: "",
            birthday: "",
            email: "",
            username: "",
            password: "",
            },

            emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],

            show1: false,
            rules: {
            required: value => !!value || "Required.",
            min: v => (v && v.length >= 8) || "Min 8 characters"
            },
            dialog: false,
        }),

        methods: {
            submitForm(event) {
                let parent = this
                //console.log(dialog)
                this.axios.post("http://localhost:8000/vueRegis", {
                    fname: this.form.fname,
                    lname: this.form.lname,
                    gender: this.form.gender,
                    birthday: this.form.birthday,
                    email: this.form.email,
                    username: this.form.username,
                    password: this.form.password,
 
                }).then(function (response) {
                   
                    // console.log(response.data);
                    // console.log(response.status);
                    // console.log(response.statusText);
                    // console.log(response.headers);
                    // console.log(response.config);
                    if (response){
                        const status = response.status;
                        switch (status) {
                            case 200:
                              parent.dialog = true;
                              event.target.reset();
                              break;
                            default:
                              
                        }
                    }
                
                });
                //console.log("Welcome!");
                //console.warn(this.form)
            },
        },
    };
</script>
