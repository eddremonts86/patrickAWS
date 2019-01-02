<template>
  <v-layout justify-center row>
    <v-dialog max-width="600px" persistent v-model="userEditordialog">
      <v-card>
        <v-card-title>
          <span class="headline">Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Legal first name*" required :value="user.name"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="Email*" required :value="user.mail"></v-text-field>
              </v-flex>

              <v-flex xs12>
                    <v-switch
                      v-for="group in userGroup"
                      :key="group._id"
                      :label="group.name"
                      @change="onchangeUserGroup(group._id)"
                    ></v-switch>
              </v-flex>

              
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="userEditordialog = false" color="blue darken-1" flat>Close</v-btn>
          <v-btn @click="edictUser(userGroup)" color="blue darken-1" flat>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: ["userEditordialog", "groupId"],
  data() {
    return {
      userGroup: [],
      user:[]
    };
  },
  methods: {
    init: function() {       
      if (this.groupId) {
        let url = this.$urlBase + "/api/user/" + this.groupId;
        this.$http
          .get(url, this.$httpConfg)
          .then(response => (this.user = response.data.items))
          .catch(function(error) {
            alert("some error" + error)
          });
        }
    },
    edictUser: function(name, email, enabled) {
      let url = this.$urlBase + "/api/user/" + id;
      this.$http
        .put(
          url,
          {
            _id:this.groupId,
            name: name,
            email: email,
            groups: [],
            enabled: !enabled
          },
          this.$httpConfg
        )
        .then(response => (this.desserts = response.data.items))
        .catch(function(error) {
          alert("some error" + error);
        });
    },
    onchangeUserGroup(data) {
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
  updated() {
    this.init();
  }  
};
</script>