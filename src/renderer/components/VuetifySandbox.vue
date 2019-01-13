<template>
    <v-app id="sandbox">
        <v-navigation-drawer
                v-model="model"
                :temporary="true"
                absolute
                overflow
                app
        >
            <v-list>
                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        :to="item.local_path"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app absolute :clipped-left="true">
            <v-btn icon
                   @click.stop="model = !model"
            ><v-icon dark>list</v-icon></v-btn>
            <v-toolbar-title>KeepinTouch</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid id="v-container">
                <v-layout align-center justify-center id="v-layout">
                    <v-flex id="v-flex">
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'sandbox',
        data () {
            return {
                model: null,
                items: [
                    {title: 'Home', icon: 'dashboard', local_path: '/homePage'},
                    {title: 'Add New', icon: 'add_box', local_path: '/addNew'},
                    {title: 'Manage Records', icon: 'assignment', local_path: '/managePage'},
                    {title: 'About', icon: 'question_answer', local_path: '/aboutPage'}
                ]
            }
        }
    }
</script>

<style>
    #v-container {border: red 1px solid}
    #v-layout {border: purple 1px solid}
    #v-flex {border: green 1px solid}
</style>
