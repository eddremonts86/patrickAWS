<template>
    <v-flex>
        <v-alert :value="alert" transition="scale-transition" type="success">This is a success alert.</v-alert>
        <v-alert :value="alert_error" transition="scale-transition" type="error">Some error....</v-alert>
        <v-data-table :headers="headers" :items="desserts" class="sm6 xs12">
            <template slot="items" slot-scope="props">
                <td class="text-xs-justify">{{ props.item.name }}</td>
                <td class="text-xs-justify">{{ props.item.email }}</td>
                <td class="text-xs-justify">{{ props.item._type }}</td>
               <td
                        class="text-xs-justify"
                        v-for="group in  props.item.groups"
                        :key="group.user_group.name"
                >{{ group.user_group.name }}
                </td>
                <td class="text-xs-justify">
                    <v-btn
                            color="indigo"
                            dark
                            fab
                            flat
                            slot="activator"
                            small
                            v-on:click="editGroup(props.item._id)"
                    >
                        <v-icon dark>edit</v-icon>
                    </v-btn>
                </td>
                <td class="text-xs-justify">
                 <v-btn
                            color="indigo"
                            dark
                            fab
                            flat
                            slot="activator"
                            small
                            v-on:click="pauseGroup(props.item._id,props.item.name,props.item.email,props.item.enabled)"
                    >
                        <v-icon dark v-if="props.item.enabled">pause</v-icon>
                        <v-icon dark v-else>play_arrow</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
        <userEditor   :userEditordialog = "userEditordialog"    :groupId ="groupId" >
        </userEditor>
    </v-flex>

</template>

<script>
    import userEditor from "@/components/usersManager/users/usersEditor.vue";
    export default {
        components: {userEditor},
         data() {
            return {
                alert: false,
                alert_error: false,
                userEditordialog : false,
                groupId : null,
                headers: [
                    {text: "Name", value: "name"},
                    {text: "email", value: "email"},
                    {text: "Type", value: "_type"},
                    {text: "User Groups", value: "Non"},
                    {text: "Edit", value: "_id"},
                    {text: "Suspend user group", value: "enabled"}
                ],
                desserts: []
            };
        },
        methods: {
            editGroup: function (id) {
                this.groupId = id
                 this.userEditordialog = true
                this.$emit('userEditor:edictUserGroup')
            },
            pauseGroup: function (id, name, email, enabled) {
                let url = this.$urlBase + "/api/user/" + id;
                this.$http
                    .put(url, {
                        name: name,
                        email: email,
                        groups: [],
                        enabled: !enabled
                    }, this.$httpConfg)
                    .then(response => (this.desserts = response.data.items))
                    .catch(function (error) {
                        this.alert_error = true;
                    });
            },
            getdata: function () {
                let url = this.$urlBase + "/api/user";
                this.$http
                    .get(url, this.$httpConfg)
                    .then(response => (this.desserts = response.data.items))
                    .catch(function (error) {
                        this.alert_error = true;
                    });
            }
        },
        mounted() {
            this.getdata();
        }
    };
</script>


