<template>
    <v-container fluid>
        <v-card flat>
            <h1 class="nomal-padding">Users List</h1>
            <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                        <userCreator></userCreator>
                        <usersList></usersList>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import usersList from "@/components/usersManager/users/users.vue";
    import userCreator from "@/components/usersManager/users/userCreator.vue";
    export default {
        components: {usersList, userCreator}
    };
</script>
<style></style>