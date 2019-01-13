<template>
    <v-navigation-drawer
            :mini-variant.sync="mini"
            v-model="drawer"
            hide-overlay
            stateless
            height
            width="250"
            height="100%"
            permanent
            absolute
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="../../assets/icon.png">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>KeepinTouch</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

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
</template>

<script>
    export default {
        name: 'NaviBar',
        data () {
            return {
                drawer: true,
                items: [
                    {title: 'Home', icon: 'dashboard', local_path: '/homePage'},
                    {title: 'Add New', icon: 'add_box', local_path: '/addNew'},
                    {title: 'Manage Records', icon: 'assignment', local_path: '/managePage'},
                    {title: 'About', icon: 'question_answer', local_path: '/aboutPage'}
                ],
                mini: true,
                right: null
            }
        }
    }
</script>

<style scoped>

</style>
