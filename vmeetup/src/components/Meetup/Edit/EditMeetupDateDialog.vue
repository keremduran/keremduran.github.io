<template>
    <v-dialog width="350px" v-model="editDialog">
        <v-btn class="primary ma-0 caption" slot="activator">
            Edit Date
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h2>Edit Date</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex class="text-xs-center" xs12>
                        <v-date-picker v-model="editableDate" actions>
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
                        </v-date-picker>
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
            editableDate: null,  
        }
    },
    methods: {
        onSaveChanges () {
            const newDate = new Date(this.meetup.date)     
            const newDay = new Date(this.editableDate).getUTCDate()
            const newMonth = new Date(this.editableDate).getUTCMonth()
            const newYear = new Date(this.editableDate).getUTCFullYear()
            
            newDate.setDate(newDay)
            newDate.setMonth(newMonth)
            newDate.setYear(newYear)
            this.$store.dispatch('updateMeetup', {
                id: this.meetup.id,
                date: newDate
            })
        }
    },
    created () {
      const pickerDate = new Date(this.meetup.date)
      this.editableDate = pickerDate.getFullYear() + '-' + (pickerDate.getMonth() + 1) + '-' + pickerDate.getDate()  
    }

}
</script>



