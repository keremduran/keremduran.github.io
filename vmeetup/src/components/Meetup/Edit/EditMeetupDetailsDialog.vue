<template>
    <v-dialog width="350px" v-model="editDialog">
        <v-btn class="primary ma-0 caption" accent slot="activator">
            edit title and description
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h2>Edit Meetup</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                :counter="40"
                                label="Title"
                                v-model="editedTitle"
                                required
                            >
                            </v-text-field>
                            <v-text-field                     
                                :counter="100"
                                label="Description"
                                multi-line
                                :rows="1"           
                                v-model="editedDescription"
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
            editedTitle: this.meetup.title,
            editedDescription: this.meetup.description
        }
    },
    methods: {
        onSaveChanges () {
            if (this.editedTitle.trim() === '' || this.editedDescription === '') {
                return
            }
            this.$store.dispatch('updateMeetup', {
                id: this.meetup.id,
                title: this.editedTitle,
                description: this.editedDescription
            })
            this.editDialog = false
        }
    }
}
</script>

