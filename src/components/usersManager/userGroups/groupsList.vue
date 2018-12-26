<template>
    <v-flex>
        <v-data-table
                :headers="headers"
                :items="desserts"
                class="sm6  xs12"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-justify">{{ props.item.fat }}</td>
                <td class="text-xs-justify">{{ props.item.carbs }}</td>
                <td class="text-xs-justify">{{ props.item.protein }}</td>
                <td class="text-xs-justify">{{ props.item.iron }}</td>
                <td class="text-xs-justify">
                    <v-btn
                            v-on:click="editGroup(props.item.id)"
                            color="indigo" dark fab flat slot="activator" small>
                        <v-icon dark>edit</v-icon>
                    </v-btn>
                </td>
                <td class="text-xs-justify">
                    <v-btn
                            v-on:click="deleteGroup(props.item.id)"
                            color="indigo" dark fab flat slot="activator" small>
                        <v-icon dark>delete</v-icon>
                    </v-btn>
                </td>
                <td class="text-xs-justify">
                    <v-btn
                            v-on:click="pauseGroup(props.item.id , props.item.suspend)"
                            color="indigo" dark fab flat slot="activator" small>
                        <v-icon dark v-if="props.item.suspend">play_arrow</v-icon>
                        <v-icon dark v-else>pause</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </v-flex>
</template>
<script>
    export default {
        data() {
            return {
                headers: [
                    {text: 'Group name', value: 'name'},
                    {text: 'Adwords', value: 'fat'},
                    {text: 'Bing', value: 'carbs'},
                    {text: 'Facebook', value: 'protein'},
                    {text: 'Instagrm', value: 'iron'},
                    {text: 'Edit', value: 'id'},
                    {text: 'Delete', value: 'id'},
                    {text: 'Suspend user group', value: 'suspend'},
                ],
                desserts: [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        suspend: false,
                        iron: '1%',
                        id:1
                    },
                    {
                        value: false,
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        suspend: true,
                        iron: '1%',
                        id:2
                    },
                    {
                        value: false,
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        suspend: false,
                        iron: '7%',
                        id:3
                    }
                ]
            }
        },
        methods: {
            editGroup: function (id) {
              console.log(id);
            },
            deleteGroup: function (id) {
                alert( 'Delete group in id ' + id)
            },
            pauseGroup: function (id , susp) {
                alert( 'Pause/play group in id ' + id + ' and  suspend is '  + !susp )
            }
        },

    }
</script>