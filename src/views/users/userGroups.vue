<template>
    <v-container fluid>
        <v-card flat>
            <h1 class="nomal-padding">Users Group</h1>

            <v-btn class="primary" href="/users" router>
                <v-icon dark right>people</v-icon>
                <v-spacer></v-spacer>
                Go Users List
            </v-btn>

            <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <userGroupsCreator class="xs12"></userGroupsCreator>
                        <userGroupsList class="xs12"></userGroupsList>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script>
    import userGroupsEditor from "@/components/usersManager/userGroups/groupsEditor.vue";
    import userGroupsList from "@/components/usersManager/userGroups/groupsList.vue";
    import userGroupsCreator from "@/components/usersManager/userGroups/groupsCreator.vue";
    export default {
        components: {
            userGroupsCreator,
            userGroupsList,
            userGroupsEditor
        },
    };
</script>
<style></style>