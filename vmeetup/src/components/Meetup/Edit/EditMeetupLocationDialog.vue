<template>
    <v-dialog width="350px" v-model="editDialog">
        <v-btn class="primary ma-0 caption" accent slot="activator">
            Edit Location
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h2>Edit Location</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                :counter="40"
                                label="Location"
                                v-model="editedLocation"
                                required
                            >
                            </v-text-field>                            
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions class="px-5 py-3">
                            <v-btn
                                flat
                                class="primary"                            
                                @click="onSaveChanges">
                                Save
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                flat
                                class="primary"
                                @click="editDialog = false">
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
    props: ['meetup'],
    data () {
        return {
            editDialog: false,
            editedLocation: this.meetup.location,
        }
    },
    methods: {
        onSaveChanges () {
            if (this.editedLocation.trim() === '') {
                return
            }
            this.$store.dispatch('updateMeetup', {
                id: this.meetup.id,
                location: this.editedLocation
            })
            this.editDialog = false
        }
    }
}
</script>

