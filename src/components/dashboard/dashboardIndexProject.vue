<template>
    <v-flex class="center" xs12>
        <v-card-text class="px-0">
            <div class="projects">
                <h1>{{projectobj.name}}</h1>
                <hr>
                <v-container fluid>
                    <v-card flat>
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row wrap>
                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox
                                                color="blue"
                                                hide-details
                                                label="Adwords"
                                                v-model="adwords"
                                                value="adwords"
                                        ></v-checkbox>
                                    </v-flex>
                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox 
                                                color="blue" 
                                                hide-details 
                                                label="Odds" 
                                                v-model="odds"
                                                value="odds">
                                        </v-checkbox>
                                    </v-flex>
                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox
                                                color="blue"
                                                hide-details
                                                label="Facebook"
                                                v-model="facebook"
                                                value="facebook"
                                        ></v-checkbox>
                                    </v-flex>

                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox
                                                color="blue"
                                                hide-details
                                                label="Instagram"
                                                v-model="Instagram"
                                                value="Instagram"
                                        ></v-checkbox>
                                    </v-flex>


                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox
                                                color="red"
                                                hide-details
                                                label="Disapproved"
                                                v-model="disapproved"
                                                value="disapproved"
                                        ></v-checkbox>
                                    </v-flex>

                                    <v-flex md2 sm2 xs12>
                                        <v-checkbox
                                                color="red"
                                                hide-details
                                                label="Error Only"
                                                v-model="error"
                                                value="error Only"
                                        ></v-checkbox>
                                    </v-flex>

                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-container>

                <v-data-table :headers="headers" :items="project" class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.created_date }}</td>
                        <td class="text-xs-right">{{ props.item.start_time }}</td>
                        <td class="text-xs-right">{{ props.item.start_time }}</td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                        <td class="text-xs-right">
                            <span v-for="plattf in  props.item.platforms " :key="plattf">                               
                                <v-checkbox
                                    color="red"
                                    hide-details
                                    :label="`${plattf}`"                                  
                                    value=plattf
                                ></v-checkbox>
                            </span>
                        </td>

                    </template>
                </v-data-table>
            </div>
           
        </v-card-text>       
    </v-flex>
</template>
<script>
    export default {
        props:[
            'projectobj' 
        ],
        data() {
            return {
                adwords: 1,
                odds: 1,
                facebook: 1,
                Instagram: 1,
                disapproved: 1,
                error: 1,
                headers: [
                    {text: "Tiem",value: "name"},
                    {text: "Date", value: "calories"},
                    {text: "Event", value: "fat"},
                    {text: "Sport", value: "carbs"},
                    {text: "Country", value: "protein"},
                    {text: "Tournament", value: "iron"},
                    {text: "Providers",value: "prov"},
                    {text: "Campaign Template",value: "ct"},
                    {text: "Campaign Start",value: "cs"}, 
                    {text: "Platforms/edits",value: "pe"},
                ],
                project: null
            };
        },
        methods: {
            clearswitch: function () {},
            getProjects(){  
            let url = this.$urlBase + "/api/campaign";
            this.$http
                .get(url, this.$httpConfg)
                .then(response => (this.project = response.data[0]["items"]))
                .catch(function(error) {
                 alert('I have not access to the api ...' + error)
                });
            },
            getdate(fotmat, date){
                //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
                return date 
            }
        },
        created(){
            this.getProjects()
        }
    };
</script>
<style>
    .projects {
        background: white;
        padding: 50px 10px;
        margin-bottom: 15px;
    }

    .projects h1 {
        line-height: 45px;
        margin-bottom: 15px;
    }
</style>
