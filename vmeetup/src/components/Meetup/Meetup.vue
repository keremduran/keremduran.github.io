
<template>
    <v-container>    
        <!-- Dummy card for loading-->
        <v-layout v-if="loading" row wrap>
            <v-flex xs12 class="text-xs-center">
                <v-card class="secondary align-items-center" height="350px">              
                    <!-- Just couldn't vertically center the progress circle :( -->      
                    <v-flex xs12 style="height: 45%"></v-flex>
                    <v-progress-circular
                        indeterminate
                        class="primary--text"
                        :width="7"
                        :size="70"
                    >
                    </v-progress-circular>
                </v-card>
            </v-flex>
        </v-layout>      
        <!-- Actual meetup card below-->      
        <v-layout v-else row wrap>
            <v-flex xs12>
                <v-card class="secondary">
                    <v-card-title class="pa-2 pl-4 py-3">  
                        <h2>{{ meetup.title }}</h2>                
                        <v-icon large v-if="userIsRegistered" class="mx-2 green--text darken-1" dark right>how_to_reg</v-icon>
                        <v-icon large v-if="userIsCreator" class="mx-2 green--text">gavel</v-icon>
                        <template v-if="userIsCreator && editButtonsActive">  
                            <app-edit-meetup-details-dialog
                                :meetup="meetup"
                                class="ml-3"
                            >
                            </app-edit-meetup-details-dialog>
                        </template>                                                               
                        <v-spacer></v-spacer>
                        <template v-if="userIsCreator" >  
                            <v-btn class="primary ma-0"
                                fab accent
                                @click="editToggle">
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </template>
                    </v-card-title>
                    <v-img
                        :src="meetup.imageUrl"
                        aspect-ratio="3" 
                    ></v-img>
                    <v-card-text>
                        <div class="mb-1">
                            <b>{{ meetup.date | datify }} - {{meetup.location}}</b>
                            <v-spacer></v-spacer>
                            <div>
                                <app-edit-meetup-date-dialog
                                    :meetup="meetup"
                                    v-if="userIsCreator && editButtonsActive">
                                </app-edit-meetup-date-dialog>
                                <app-edit-meetup-time-dialog
                                    :meetup="meetup"
                                    v-if="userIsCreator && editButtonsActive">
                                </app-edit-meetup-time-dialog>
                                <app-edit-meetup-location-dialog
                                    :meetup="meetup"
                                    v-if="userIsCreator && editButtonsActive">
                                </app-edit-meetup-location-dialog>
                                <!-- Edit Image to be added -->
                            </div>                            
                        </div>
                        <v-divider class="my-3"></v-divider>
                        <div class="body-2">{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <!--<div class="body-2 mx-2" style="display: inline">  Created by: {{ creator.email }}</div>-->
                        <v-spacer></v-spacer>         
                        <app-meetup-register-dialog
                            :meetupId="meetup.id"
                            v-if="userIsAuthenticated && !userIsCreator">
                        </app-meetup-register-dialog>
                        <v-btn
                            class="red ma-0 caption"
                            dark
                            v-if="userIsCreator"
                            slot="activator"
                            @click="log('Uh... Delete Meetup Dialog!')">
                            Delete Meetup
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            editButtonsActive: false,
        }
    },
    computed: {
        meetup () {                   
            return this.$store.getters.loadedMeetup(this.id)
        },
        userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        userIsCreator () {
            if (!this.userIsAuthenticated){
                return false
            }
            return this.$store.getters.user.id === this.meetup.creatorId
        },
        loading () {
            return this.$store.getters.loading
        },
        userIsRegistered () {
            return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
               return meetupId === this.id
            }) >= 0
        }
    },
    methods: {
        editToggle () {
            this.editButtonsActive = !this.editButtonsActive
        },
        log (item) {
            console.log(item)
        }
    },
}
</script>

