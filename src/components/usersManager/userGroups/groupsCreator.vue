<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog"  persistent max-width="600px"  hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" color="indigo" dark fab>
                <v-icon dark>add</v-icon>
            </v-btn>
            <v-card>
                <v-card-title  class="headline grey lighten-3">
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 >
                                <v-text-field label="Legal first name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                         :items=items
                                        label="Adwords"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                         :items=items
                                        label="Bing"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                         :items=items
                                        label="Facebook"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                        :items=items
                                        label="Instagram"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>

                            <v-flex xs12>
                                 <v-autocomplete
                                        :items=adminItems
                                        label="Admin"
                                        multiple
                                ></v-autocomplete>
                            </v-flex>

                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        data () {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                items:['view', 'edit', 'edit&post'],
                adminItems:['Admin', 'Super Admin']
            }
        }
    }
</script>