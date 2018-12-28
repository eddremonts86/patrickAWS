<template>
     <v-container>
         <v-layout>
             <v-flex class="xs12">
                 <v-btn slot="activator" color="primary" dark @click="openModel">Create new user</v-btn>
                 <v-dialog v-model="userdialog" persistent max-width="600px">
                     <v-card>
                         <v-card-title>
                             <span class="headline">New User</span>
                         </v-card-title>
                         <v-card-text>
                             <v-container grid-list-md>
                                 <v-layout wrap>

                                     <v-flex xs12>
                                         <v-text-field label="Legal first name*" required></v-text-field>
                                     </v-flex>

                                     <v-flex xs12>
                                         <v-text-field label="Email*" required></v-text-field>
                                     </v-flex>

                                     <v-flex xs12 >
                                         <v-switch    v-for="group in userGroup"    :key="group ._id  " :label="group .name" ></v-switch>
                                     </v-flex>

                                 </v-layout>
                             </v-container>
                             <small>*indicates required field</small>
                         </v-card-text>
                         <v-card-actions>
                             <v-spacer></v-spacer>
                             <v-btn color="blue darken-1" flat @click="userdialog = false">Close</v-btn>
                             <v-btn color="blue darken-1" flat @click="userdialog = false">Save</v-btn>
                         </v-card-actions>
                     </v-card>
                 </v-dialog>
             </v-flex>
         </v-layout>
     </v-container>
</template>
<script>
    export default {
        data() {
            return {
                switch0:true,
                switch1:true,
                switch2:true,
                userdialog: false,
                userGroup:[]
            }
        },
        methods: {
            getdata: function () {
                let url = this.$urlBase + "/api/user-group";
                this.$http
                    .get(url, this.$httpConfg)
                    .then(response => (this.userGroup = response.data.items))
                    .catch(function (error) {
                        this.userGroup  =    userGroup[
                            {name:'editor' , _id:'1', enabled: true},
                            {name:'Admin' , _id:'2', enabled: true},
                            {name:'Super Admin' , _id:'3', enabled: true}
                        ]
                    });
            },
            openModel:function () {
                this.userdialog = true
            }
        },
        mounted() {
            this.getdata();
        }
    }
</script>