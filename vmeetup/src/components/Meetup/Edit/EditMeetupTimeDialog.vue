<template>
    <v-dialog width="350px" v-model="editDialog">
        <v-btn class="primary ma-0 caption" slot="activator">
            Edit Time
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h2>Edit Time</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex class="text-xs-center" xs12>
                        <v-time-picker v-model="editableTime" style="..." actions format="24hr">
                            <template scope="{save, cancel}">
                                <v-btn class="primary ml-4 my-1"
                                    flat
                                    @click.native="onSaveChanges">
                                    Save
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn class="primary mr-4 my-1"
                                    flat
                                    @click.native="editDialog = false">
                                    Close
                                </v-btn>                                
                            </template>
                        </v-time-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['meetup'],
    data() {
        return {
            editDialog: false,         
            editableTime: null, 
            hours: null,
            minutes: null 
        }
    },
    methods: {
        onSaveChanges () {
            const newDate = new Date(this.meetup.date)
            const hours = this.editableTime.match(/^(\d+)/)[1]
            const minutes = this.editableTime.match(/:(\d+)/)[1]
            newDate.setHours(hours)
            newDate.setMinutes(minutes)          
            this.$store.dispatch('updateMeetup', {
                id: this.meetup.id,
                date: newDate
            })
        }
    },
    created () {
        const date = new Date(this.meetup.date)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        if (hours < 10) {
            hours = "0"+hours
        } else if (minutes < 10) {
            minutes = "0"+minutes
        }
        this.hours = hours
        this.minutes = minutes
        this.editableTime = hours + ":" + minutes    
    }
}
</script>



