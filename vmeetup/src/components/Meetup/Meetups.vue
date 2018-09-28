<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2 >
                <v-card class="info mb-3 secondary" v-for="meetup in meetups" :key="meetup.id">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4>
                                <v-img
                                :loading="loading"
                                :src="meetup.imageUrl"
                                aspect-ratio="1.3"
                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="mb-0">{{ meetup.title }}</h2>
                                        <div v-if="userIsAuthenticated" style="display: inline">
                                            <v-icon v-if="userIsRegistered(meetup)" class="mx-2 green--text">how_to_reg</v-icon>
                                            <v-icon v-if="userIsCreator(meetup)" class="mx-2 green--text">gavel</v-icon> 
                                        </div>                                       
                                        <div>{{ meetup.date | datify }} - {{ meetup.location }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="'meetups/' + meetup.id">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        },
        userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        loading () {
            return this.$store.getters.loading
        }       
    },
    methods: {
        userIsCreator (meetup) {
            if (!this.userIsAuthenticated){
                return false
            }
            return this.$store.getters.user.id === meetup.creatorId
        },
        userIsRegistered (meetup) {
            return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
               return meetupId === meetup.id
            }) >= 0
        }     
    },
}
</script>

<style scoped>
    .secondary {
        background: #d5f0ff !important;
    }

    h2 {
        display: inline;
    }
</style>


