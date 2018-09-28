<template>
    <v-dialog max-width="50vw" v-model="registerDialog">
        <v-btn class="primary ma-0 caption" slot="activator">
            {{ userIsRegistered ? 'Unregister' : 'Register'}}
        </v-btn>
        <v-card
        >
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title v-if="userIsRegistered">Unregister from Meetup?</v-card-title>
                        <v-card-title v-else>Register for Meetup?</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn
                                @click="onAgree"
                                class="green--text secondary flat">
                                Confirm
                            </v-btn>
                            <v-btn
                                @click="registerDialog = false"
                                class="red--text secondary flat">
                                Cancel
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {    
    props: ['meetupId'],
    data () {
        return {
            registerDialog: false,
        }
    },
    computed: {
        userIsRegistered () {
            return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
               return meetupId === this.meetupId
            }) >= 0
        }
    },
    methods: {
        onAgree () {
            if (this.userIsRegistered) {
                this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
            } else {
                this.$store.dispatch('registerUserForMeetup', this.meetupId)
            }
            this.$emit("registerStatusChanged",!this.userIsRegistered)
        }
    },
}
</script>





