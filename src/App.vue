<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <v-toolbar-side-icon @click="navegation = !navegation"></v-toolbar-side-icon>
                <span>GIG -</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn :key="item.name"
                       :to="item.href"
                       flat
                       router v-for="item in headMenu"
                >
                    <v-icon dark right>{{item.icon}}</v-icon>
                    {{item.name}}
                </v-btn>
                <span class="content">
          Logged in as : {{user}}
          <img
                  class="img-logo"
                  src="https://tcrf.net/images/1/14/Persona-Q-Chie-Bust-Final.png"
          >
        </span>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer app class="dark" v-model="navegation">
            <v-layout row>
                <v-flex xs12>
                    <v-card>
                        <v-toolbar color="primary" dark>
                            <v-toolbar-title>Dashboard</v-toolbar-title>
                        </v-toolbar>
                        <v-list>
                            <v-list-group
                                    :key="item.title"
                                    :prepend-icon="item.action"
                                    no-action
                                    v-for="item in items"
                                    v-model="item.active"
                            >
                                <v-list-tile slot="activator">
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            <router-link :to="{path: item.href}" exact>{{ item.title }}</router-link>
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>

                                <v-list-tile :key="subItem.title" @click v-for="subItem in item.items">
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-icon>{{ subItem.action }}</v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </v-list-group>
                        </v-list>


                        <v-card>
                            <v-toolbar color="cyan" dark>
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>Others Services</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>

                            <v-list two-line>
                                <template v-for="item in others">
                                    <v-list-tile
                                            :key="item.title"
                                            :to="item.href"
                                            router v-if="item.title"
                                    >
                                        <v-icon left>{{item.action}}</v-icon>
                                        {{ item.title}}
                                    </v-list-tile>


                                </template>
                            </v-list>
                        </v-card>


                    </v-card>
                </v-flex>
            </v-layout>
        </v-navigation-drawer>
        <v-content>
            <v-layout row wrap>
                <v-flex xs12>
                    <div class="general-padding">
                        <router-view></router-view>
                    </div>
                </v-flex>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                navegation: false,
                user: "Edd",
                items: [
                    {
                        action: "local_activity",
                        title: "Dasboard",
                        active: true,
                        href: '/dashboard'
                    },
                    {
                        action: "restaurant",
                        title: "Campaigns",
                        href: '/campaigns'
                    },
                    {
                        action: "school",
                        title: "Templates",
                        href: '/templates'
                    }
                ],
                others: [
                    {
                        action: "local_activity",
                        title: "Imagen Library",
                        active: true,
                        href: '/dashboard'
                    },
                    {
                        action: "restaurant",
                        title: "Filter Terms",
                        href: '/campaigns'
                    },
                    {
                        action: "school",
                        title: "Trademarks",
                        href: '/templates'
                    },
                    {
                        action: "school",
                        title: "Audience association",
                        href: '/templates'
                    }
                ],
                headMenu: [
                    {icon: 'room', name: 'User Manager', href: '/users-groups'},
                    {icon: 'room', name: 'Projects', href: '/projects'},
                    {icon: 'room', name: 'Accounts', href: '/accounts'},
                    {icon: 'room', name: 'Fedds', href: '/feeds'},
                ]
            };
        }
    };
</script>


<style>

    @media only screen and (min-width: 1024px) {
        .general-padding {
            padding: 4em;
        }
    }
    .nomal-padding{
        padding: 1em;
    }

    .content {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: inherit;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 auto;
        position: relative;
        -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        white-space: nowrap;
        width: inherit;
        color: white;
        margin-left: 10px;
        font-size: 16px;
        background: rgb(25, 118, 210);
        padding: 0px 15px;
    }

    .img-logo {
        height: 40px;
        width: 40px;
        background: white;
        margin-left: 5px;
        border-radius: 100%;
    }

    .v-list__tile__title > a {
        text-decoration: none;
        color: #444;
    }

    a.router-link-active,
    .v-list__group__header--active .v-list__group__header__prepend-icon .v-icon {
        color: #ffffff;
    }

    .v-list__group--active {
        background: #1976d2;
    }
</style>
