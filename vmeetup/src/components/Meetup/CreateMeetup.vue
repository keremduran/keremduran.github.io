<template>
    <v-container>
        <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
                <h2 class="primary--text text-xs-center">Create a New Meetup</h2>
            </v-flex>
        </v-layout>
        <v-form @submit.prevent="onCreateMeetup">
            <v-layout row>     
                <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                            v-model="title"
                            :counter="40"
                            label="Title"
                            required
                        >
                        </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                            v-model="location"
                            label="Location"
                            required
                        >
                        </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                            v-model="description"                       
                            :counter="100"
                            label="Description"
                            multi-line
                            :rows="1"
                            required
                        >
                        </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row class="mb-4">
                <v-flex xs12 sm6 offset-sm3>
                    <v-btn
                        class="primary caption lowercase"
                        @click="onPickImage"                     
                        >
                        Upload Image
                        <v-icon right dark>cloud_upload</v-icon>
                    </v-btn>
                    <input
                        type="file"
                        accept="image/*"
                        style="display:none"
                        ref="pickImage"
                        @change="onImagePicked">
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-img
                    :src="imageUrl"
                    ></v-img>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex class="my-2" xs12 sm6 offset-sm3>
                    <h3 class="primary--text text-xs-center">Choose a Date & Time</h3>
                </v-flex>
            </v-layout>
            <v-layout row> <!-- To center the date pickers -->
                <v-flex xs12 sm6 offset-sm3>
                    <v-layout row>
                        <v-flex class="mb-1" xs12>
                            <v-menu
                                ref="menu"
                                :close-on-content-click="false"
                                v-model="menu"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    label="Date"
                                    prepend-icon="event"
                                    readonly
                                    :value="getDate"
                                ></v-text-field>
                                <v-date-picker v-model="date"></v-date-picker>
                            </v-menu>  
                            <v-menu
                                ref="menu"
                                :close-on-content-click="false"
                                v-model="menu2"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    label="Time"
                                    prepend-icon="event"
                                    readonly
                                    :value="getTime"
                                ></v-text-field>
                                <v-time-picker v-model="time" format="24hr"></v-time-picker>
                            </v-menu>                                                 
                        </v-flex>
                    </v-layout>
                </v-flex>           
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-btn :disabled="!formIsValid"      
                    type="submit"
                    class="primary">
                        Create Meetup
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: '',             
            date: null,            
            time: new Date(),   
            menu: false,
            menu2: false,   
            image: null
        }
    },
    computed: {
        formIsValid () { 
            return this.title !== '' &&
                this.location !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
        },
        parsedDateTime () {       
            let date
            if (!this.date) {
                date = new Date()
            } else {
                date = new Date(this.date)
                date.setDate(date.getUTCDate())                
            }

            if(typeof this.time === 'string'){
                let hours = this.time.match(/^(\d+)/)[1]
                let minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
            } else {
                date.setHours(this.time.getHours())                
                date.setMinutes(this.time.getMinutes())
            }
            return date
        },
        getDate() {
            let date, year
            if (!this.date) {
                date = new Date()
            } else {
                date = new Date(this.date)                       
                date.setDate(date.getUTCDate())             
            }  
            date = date.toString().substring(0,15)
            return date
        },
        getTime() {
            let time, hours, minutes
            if(typeof this.time === 'string'){
                hours = this.time.match(/^(\d+)/)[1]
                minutes = this.time.match(/:(\d+)/)[1]
                time = hours+":"+minutes
            } else {
                hours = this.time.getHours()             
                minutes = this.time.getMinutes()
                if (hours < 10) {
                    hours = "0"+hours
                } else if (minutes < 10) {
                    minutes = "0"+minutes
                }
            }
            time = hours+":"+minutes
            return time
        },
    },


    methods: {
        onCreateMeetup () {
            if(!this.formIsValid){
                return
            }
            if (!this.image){
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                image: this.image,
                description: this.description,
                date: this.parsedDateTime
            }
            this.$store.dispatch('createMeetup', meetupData)            
            this.$router.push('/meetups')
        },
        onPickImage () {
            this.$refs.pickImage.click()
        },
        onImagePicked (event) {
            const files = event.target.files
            let fileName = files[0].name
            //let fileType = files[0]['type']+""
            if (fileName.lastIndexOf('.') <= 0) {
                return alert('The file you selected has no extension.\nPlease upload an image file with a valid extension.')
            }
            // else if (!fileType.includes('image')) {
            //     console.log(fileType+" was uploaded");               
            //     return alert('The file you selected was in ' + fileType + ' type.\nPlease upload an image file.')         
            // }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    }
}
</script>
