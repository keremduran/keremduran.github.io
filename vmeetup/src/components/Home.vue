<template>
    <v-container>
        <v-layout row wrap>
            <!-- Dummy carousel for loading-->
            <v-flex v-if="loading" xs12 class="text-xs-center">
                <v-carousel>
                    <v-carousel-item class="align-items-center">
                        <v-progress-circular
                            indeterminate              
                            class="primary--text"
                            :width="7"
                            :size="70"
                        >
                        </v-progress-circular>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>        
        <v-layout row wrap>  
            <v-flex v-if="!loading" xs12>
                <v-carousel style="cursor: pointer">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    @click="onLoadMeetup(meetup.id)">
                        <v-flex>
                            <v-layout justify-center>
                                <div class="text-xs-center title">
                                    {{ meetup.title }}
                                </div>
                            </v-layout>
                        </v-flex>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>         
        </v-layout>  
        <v-layout row wrap class="mt-4 mb-2">
            <v-flex xs12 class="text-xs-center">
                <h3 class="primary--text"> <b>Join Our Community!</b> </h3>
            </v-flex>
        </v-layout>
        <v-layout v-if="user!==null" row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn router :to="{name: 'Meetups'}" class="primary" large>Explore Meetups</v-btn>
            </v-flex>
            <v-flex  xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn router :to="{name: 'CreateMeetup'}" class="primary" large>Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <!-- Guests won't see the Organize Meetups button -->
        <v-layout v-if="user===null" row wrap class="mb-2">
            <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                <v-btn router :to="{name: 'Meetups'}" class="primary" large>Explore Meetups</v-btn>
            </v-flex>   
        </v-layout>     
    </v-container>
</template>

<script>
export default {

    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        },       
        loading () {
            return this.$store.getters.loading
        },
        user () {
            return this.$store.getters.user
        }
    },
    methods: {
        onLoadMeetup (id) {
            this.$router.push('/meetups/'+id);
        },
    }

}
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: .5em;       
    }
    .align-items-center {
        display: flex;
        align-items: center;
    }
</style>
