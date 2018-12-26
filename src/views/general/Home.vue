<template>
    <v-container fluid>
        <v-card flat>
            <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <v-flex sm6  xs12 >
                            <v-flex  sm3 xs12>
                                <v-checkbox
                                        color="adwords"
                                        hide-details
                                        label="adwords"
                                        v-model="ex4"
                                        value="adwords"
                                ></v-checkbox>
                            </v-flex>
                            <v-flex  sm3 xs12>
                                <v-checkbox color="odds" hide-details label="odds" v-model="ex4"
                                            value="odds"></v-checkbox>
                            </v-flex>
                            <v-flex  sm3 xs12>
                                <v-checkbox
                                        color="facebook"
                                        hide-details
                                        label="facebook"
                                        v-model="ex4"
                                        value="facebook"
                                ></v-checkbox>
                            </v-flex>
                            <v-flex  sm3 xs12>
                                <v-checkbox
                                        color="Instagram"
                                        hide-details
                                        label="Instagram"
                                        v-model="ex4"
                                        value="Instagram"
                                ></v-checkbox>
                            </v-flex>
                        </v-flex>
                        <v-flex  sm6   xs12 >
                             <v-flex xs6>
                                <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="date"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px">
                                    <v-text-field
                                            slot="activator"
                                            v-model="date"
                                            label="Start Date"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-flex>
                             <v-flex xs6>
                                <v-dialog
                                        ref="dialog"
                                        v-model="end_modal"
                                        :return-value.sync="end_date"
                                        persistent
                                        lazy
                                        full-width
                                        width="290px">
                                    <v-text-field
                                            slot="activator"
                                            v-model="end_date"
                                            label="End Date"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="end_date" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="end_modal = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.dialog.save(end_date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
        <dasboardIndexProject></dasboardIndexProject>
    </v-container>


</template>
<script>
    import dasboardIndexProject from "@/components/dashboard/dashboardIndexProject.vue";

    export default {
        components: {dasboardIndexProject},
        data: () => ({
            ex4: 1,

            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,

            end_date: new Date().toISOString().substr(0, 10),
            end_menu: false,
            end_modal: false,
         })
    };
</script>
<style>
</style>
