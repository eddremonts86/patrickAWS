<template>
    <v-flex class="center" xs12>
        <v-card-text class="px-0">
            <div class="projects">
                <h1>{{projectName}}</h1>
                <hr>
                <v-container fluid>
                    <v-card flat>
                        <v-card-text>
                            <v-container fluid>
                                <v-layout row wrap>
                                    <v-flex md3 sm3 xs12>
                                        <v-checkbox
                                                color="adwords"
                                                hide-details
                                                label="adwords"
                                                v-model="ex4"
                                                value="adwords"
                                        ></v-checkbox>
                                    </v-flex>
                                    <v-flex md3 sm3 xs12>
                                        <v-checkbox color="odds" hide-details label="odds" v-model="ex4"
                                                    value="odds"></v-checkbox>
                                    </v-flex>
                                    <v-flex md3 sm3 xs12>
                                        <v-checkbox
                                                color="facebook"
                                                hide-details
                                                label="facebook"
                                                v-model="ex4"
                                                value="facebook"
                                        ></v-checkbox>
                                    </v-flex>

                                    <v-flex md3 sm3 xs12>
                                        <v-checkbox
                                                color="Instagram"
                                                hide-details
                                                label="Instagram"
                                                v-model="ex4"
                                                value="Instagram"
                                        ></v-checkbox>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-container>

                <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.calories }}</td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                </v-data-table>
            </div>
        </v-card-text>
    </v-flex>
</template>
<script>
    export default {
        data() {
            return {
                ex4: 1,
                projectName: "Project Name",
                headers: [
                    {
                        text: "Dessert (100g serving)",
                        align: "left",
                        sortable: false,
                        value: "name"
                    },
                    {text: "Calories", value: "calories"},
                    {text: "Fat (g)", value: "fat"},
                    {text: "Carbs (g)", value: "carbs"},
                    {text: "Protein (g)", value: "protein"},
                    {text: "Iron (%)", value: "iron"}
                ],
                desserts: [
                    {
                        value: false,
                        name: "Frozen Yogurt",
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: "1%"
                    },
                    {
                        value: false,
                        name: "Ice cream sandwich",
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: "1%"
                    },
                    {
                        value: false,
                        name: "Eclair",
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: "7%"
                    },
                    {
                        value: false,
                        name: "Cupcake",
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: "8%"
                    },
                    {
                        value: false,
                        name: "Gingerbread",
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: "16%"
                    },
                    {
                        value: false,
                        name: "Jelly bean",
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: "0%"
                    },
                    {
                        value: false,
                        name: "Lollipop",
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: "2%"
                    },
                    {
                        value: false,
                        name: "Honeycomb",
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: "45%"
                    },
                    {
                        value: false,
                        name: "Donut",
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: "22%"
                    },
                    {
                        value: false,
                        name: "KitKat",
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: "6%"
                    }
                ]
            };
        },
        methods: {
            clearswitch: function () {
                console.log(this.$root.$el.id);
            }
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
