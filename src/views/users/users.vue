<template>
  <v-container fluid>
    <v-card flat>
      <h1 class="nomal-padding">Users List</h1>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <usersList></usersList>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import usersList from "@/components/usersManager/users/users.vue";
import userEditor from "@/components/usersManager/users/usersEditor.vue";
import Axios from "axios";
export default {
  components: { usersList, userEditor, Axios },
  data: { data: "" },
  methods: {
    update: function() {
      axios({
        method: "put",
        url: "https://bsmjabxgm0.execute-api.eu-central-1.amazonaws.com/dev-xavier/api/user/791680ae-622d-445c-a854-582bb07a0b94",
        data: {
            'name':'name',
             email: 'test@gmail.com',
             groups: [],
             enabled: true

        },
        config: { headers: { 
            "Content-Type": "multipart/form-data", 
            Authorization:'eyJraWQiOiJjd1RqelZOazhiVkxWajkyMWFJOUZSbUoyZkk2Q0lNVlgrZGZVMXFEUFlFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMDJjMTRkYS00ZmRhLTQ1NzMtOTY1Yi0yN2UyNmJlZGZiMTkiLCJjb2duaXRvOmdyb3VwcyI6WyJldS1jZW50cmFsLTFfY1dBT0Flb0RUX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTQ1OTA2NDM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9jV0FPQWVvRFQiLCJleHAiOjE1NDU5MTAwMzksImlhdCI6MTU0NTkwNjQzOSwidmVyc2lvbiI6MiwianRpIjoiMDdjMzJjMmQtOGIyMi00OTljLWJlOWYtODBhM2I2YTM0MjNhIiwiY2xpZW50X2lkIjoiMnZoaGRvbTVobWxhdm1tdTVidDg4aTdhdmMiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMTU0MDY5NjU4MTgwOTYxNDE4MTYifQ.YU2QUoBp8B8VW1wtYPWxUfHazVbUvDkN-0X55ZUKeSARPzG7qUtAFYfHbSCihWPzmnJWJWVHhwUJR0jUIaEjtbRYJfTb1qiQ26EnW-B5QIkTvlu5b5c0zAeRHbuzRpDCIym6rTMJ8xqmdpfsC7Y748MtqJdUBD1UCq93BJhteBRQJ-BFEyhXph2SSvkDmEvdO5Dj8AdPY5tcg6vQe7t8x4IedCIxFx-KF0DxFMfX2AuXKcLrY45x411VPBgLtRCdIDy8RcuhFn6evqTw_-egfM4QnGV0he7DcGmPAjwX82OkBy5FQg7o_8OANh8uCagHd3IYaqLJoUwIg-gy71aLnw',

            } }
      })
        .then(function(response) {
          if (response.status === 200) {
            console.log("Update Success");
            resolve();
          }
        })
        .catch(function(response) {
          console.log(response);
          resolve();
        });
    }
  },
   mounted() {
    this.update();
  }
};
</script>
<style></style>