<template>
  <v-container>
    <v-layout>
      <v-flex class="xs12">
        <v-btn slot="activator" color="primary" dark @click="openModel">Create new user</v-btn>
        <v-dialog v-model="userdialog" persistent max-width="600px">
          <v-card>
            <v-card-title class="primary">
              <span class="headline">New User</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="name*" v-model="name" required></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field label="Email*" v-model="email" required></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-switch
                      v-for="group in userGroup"
                      :key="group._id"
                      :label="group.name"
                      @change="onchangeUserGrroup(group._id)"
                    ></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="userdialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="createUser">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      userdialog: false,
      email: "",
      name: "",
      userGroup: [],
      userGroupActive: []
    };
  },
  methods: {
    getdata: function() {
      let url = this.$urlBase + "/api/user-group";
      this.$http
        .get(url, this.$httpConfg)
        .then(response => (this.userGroup = response.data.items))
        .catch(function(error) {
          alert("some error" + error);
        });
    },
    openModel: function() {
      this.userdialog = true;
    },
    createUser: function() {
      let url = this.$urlBase + "/api/user/";
      let newUser = {
        name: this.name,
        email: this.email,
        groups: this.userGroupActive,
        enabled: true
      }
      this.$http
        .post(url, newUser, this.$httpConfg)
        .then(response => (this.desserts = response.data.items))
        .catch(function(error) {
          alert("some error" + error);
        });
    },
    onchangeUserGrroup(data) {
      let ishere = false;
      for (var i = this.userGroupActive.length - 1; i >= 0; i--) {
        if (this.userGroupActive[i] === data) {
          this.userGroupActive.splice(i, 1);
          ishere = true;
        }
      }
      if (!ishere) {
        this.userGroupActive.push(data);
      }
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>