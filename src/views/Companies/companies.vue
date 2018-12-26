<template>
    <v-flex class="center" md6 sm12 xs12>
        <v-card-text class="px-0">
            <h1 class="display-3">Choose Company</h1>
            <v-checkbox label="Remember my choice and set as default"></v-checkbox>
            <v-spacer></v-spacer>
            <div :key="c" v-for="(company , c) in companies">
                <v-btn class="primary"  href="/dashboard">{{company.name}}</v-btn>
            </div>
        </v-card-text>
    </v-flex>
</template>

<style>
    .center {
        margin: 0 auto;
        padding: 2em 15em;
        text-align: left;
    }

    h1,
    h3 {
        margin: 15px;
    }

    @media screen and (max-width: 768px) {
        .center {
            margin: 0 auto;
            padding: 0.2em;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                companies: [
                    {name: "Rebel Penguin Agency", id: "1"},
                    {name: "Gaming  Innovation Group", id: "2"}
                ]
            };
        }
    };
</script>
