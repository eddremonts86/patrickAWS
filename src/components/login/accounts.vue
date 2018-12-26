<template>
    <v-flex class="center" md6 sm12 xs12>
        <v-card-text class="px-0">
            <h1 class="display-3">PATRICK</h1>
            <v-spacer></v-spacer>
            <v-btn class="primary"   href="/company">Sing-in whit Google</v-btn>
            <v-btn   href="/company">Sing-in whit Account</v-btn>
            <v-spacer></v-spacer>
            <h3 class="title">
                Send an email to patrick@gig.com if you have issues whit your user permission,
                or if you believe you should have access to this system
            </h3>
        </v-card-text>
    </v-flex>
</template>
<style>
    .center {
        margin: 0 auto;
        padding: 2em 15em;
        text-align: center;
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
    export default {};
</script>
