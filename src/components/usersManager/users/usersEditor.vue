<template>
    <v-layout justify-center row>
        <v-dialog max-width="600px" persistent v-model="userEditordialog">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit  User</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>

                            <v-flex xs12>
                                <v-text-field label="Legal first name*" required>{{groupId}}</v-text-field>
                            </v-flex>

                            <v-flex xs12>
                                <v-text-field label="Email*" required></v-text-field>
                            </v-flex>

                            <v-flex xs12>
                                <v-switch :key="group ._id  " :label="group .name"
                                          v-for="group in userGroup"></v-switch>
                            </v-flex>

                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="userEditordialog = false" color="blue darken-1" flat>Close</v-btn>
                    <v-btn @click="userEditordialog = false" color="blue darken-1" flat>Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        props: ['userEditordialog','groupId'],
        data() {
            return {
                userGroup: [],
            }
        },
        methods: {
            edictUserGroup: function () {
                this.userEditordialog = true;
                if (this.groupId) {
                    let url = this.$urlBase + "/api/user/id/" + this.groupId;
                    this.$http
                        .get(url, this.$httpConfg)
                        .then(response => (this.userGroup = response.data.items), this.userEditordialog = true)
                        .catch(function (error) {
                            this.userGroup = [
                                {name: 'editor', _id: '1', enabled: true},
                                {name: 'Admin', _id: '2', enabled: true},
                                {name: 'Super Admin', _id: '3', enabled: true}
                            ];
                            alert(error)
                        });
                }
            }
        },
        create() {
            this.edictUserGroup()
        }

    }
</script>