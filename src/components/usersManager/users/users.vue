<template>
  <v-flex>
    <v-alert :value="alert" type="success" transition="scale-transition">This is a success alert.</v-alert>
    <v-alert
      :value="alert_error"
      type="error"
      transition="scale-transition"
    >This is a success alert.</v-alert>

    <v-alert
      :value="alert_error"
      type="error"
      transition="scale-transition"
    >This is a success alert.</v-alert>

    <v-data-table :headers="headers" :items="desserts" class="sm6 xs12">
      <template slot="items" slot-scope="props">
        <td class="text-xs-justify">{{ props.item.name }}</td>
        <td class="text-xs-justify">{{ props.item.email }}</td>
        <td class="text-xs-justify">{{ props.item._type }}</td>
        <td
          class="text-xs-justify"
          v-for="group in  props.item.groups"
          :key="group.user_group"
        >{{ group.user_group.name }}</td>
        <td class="text-xs-justify">
          <v-btn
            v-on:click="editGroup(props.item._id,props.item.email,props.item.enabled)"
            color="indigo"
            dark
            fab
            flat
            slot="activator"
            small
          >
            <v-icon dark>edit</v-icon>
          </v-btn>
        </td>

        <td class="text-xs-justify">
          <v-btn
            v-on:click="pauseGroup(props.item._id,props.item.name,props.item.email,props.item.enabled)"
            color="indigo"
            dark
            fab
            flat
            slot="activator"
            small
          >
            <v-icon dark v-if="props.item.enabled">pause</v-icon>
            <v-icon dark v-else>play_arrow</v-icon>
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
      alert: false,
      alert_error: false,
      headers: [
        { text: "Name", value: "name" },
        { text: "email", value: "email" },
        { text: "Type", value: "_type" },
        { text: "User Groups", value: "" },
        { text: "Edit", value: "_id" },
        { text: "Suspend user group", value: "enabled" }
      ],
      desserts: []
    };
  },
  methods: {
    editGroup: function(id, email, enabled) {
      let url =
        "https://bsmjabxgm0.execute-api.eu-central-1.amazonaws.com/dev-xavier/api/user/" +
        id;
      this.$http
        .post(url, {
          email: email,
          enabled: !enabled
        })
        .then(response => (this.desserts = response.data.items))
        .catch(function(error) {
          this.alert_error = true;
        });
    },

    pauseGroup: function(id, name, email, enabled) {
      let httpConfg = {
        headers: {
          Authorization:
            "eyJraWQiOiJjd1RqelZOazhiVkxWajkyMWFJOUZSbUoyZkk2Q0lNVlgrZGZVMXFEUFlFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMDJjMTRkYS00ZmRhLTQ1NzMtOTY1Yi0yN2UyNmJlZGZiMTkiLCJjb2duaXRvOmdyb3VwcyI6WyJldS1jZW50cmFsLTFfY1dBT0Flb0RUX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTQ1OTA2NDM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9jV0FPQWVvRFQiLCJleHAiOjE1NDU5MTAwMzksImlhdCI6MTU0NTkwNjQzOSwidmVyc2lvbiI6MiwianRpIjoiMDdjMzJjMmQtOGIyMi00OTljLWJlOWYtODBhM2I2YTM0MjNhIiwiY2xpZW50X2lkIjoiMnZoaGRvbTVobWxhdm1tdTVidDg4aTdhdmMiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMTU0MDY5NjU4MTgwOTYxNDE4MTYifQ.YU2QUoBp8B8VW1wtYPWxUfHazVbUvDkN-0X55ZUKeSARPzG7qUtAFYfHbSCihWPzmnJWJWVHhwUJR0jUIaEjtbRYJfTb1qiQ26EnW-B5QIkTvlu5b5c0zAeRHbuzRpDCIym6rTMJ8xqmdpfsC7Y748MtqJdUBD1UCq93BJhteBRQJ-BFEyhXph2SSvkDmEvdO5Dj8AdPY5tcg6vQe7t8x4IedCIxFx-KF0DxFMfX2AuXKcLrY45x411VPBgLtRCdIDy8RcuhFn6evqTw_-egfM4QnGV0he7DcGmPAjwX82OkBy5FQg7o_8OANh8uCagHd3IYaqLJoUwIg-gy71aLnw",
          "content-type": "application/json"
        }
      };

      let url =
        "https://bsmjabxgm0.execute-api.eu-central-1.amazonaws.com/dev-xavier/api/user/" +
        id;
      this.$http
        .put(url, {
          name: name,
          email: email,
          groups: [],
          enabled: !enabled
        },httpConfg)
        .then(response => (this.desserts = response.data.items))
        .catch(function(error) {
          this.alert_error = true;
        });
    },
    getdata: function() {
      let url =
        "https://bsmjabxgm0.execute-api.eu-central-1.amazonaws.com/dev-xavier/api/user";
      this.$http
        .get(url, this.$httpConfg)
        .then(response => (this.desserts = response.data.items))
        .catch(function(error) {
          this.alert_error = true;
        });
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>


