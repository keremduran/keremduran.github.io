<template>
    <v-card class="info mb-3 secondary"  :key="meetup.id">
        <v-container fluid>
            <v-layout row>
                <v-flex xs5 sm4>
                    <v-img
                    v-if="!loading"
                    :src="meetup.imageUrl"
                    aspect-ratio="1.3"
                    ></v-img>
                    <v-img
                    v-else
                    aspect-ratio="1.3"
                    ></v-img>
                </v-flex>
                <v-flex xs7 sm8>
                    <v-card-title primary-title>
                        <div>
                            <h2 class="mb-0">{{ meetup.title }}</h2>
                            <v-icon v-if="userIsRegistered(meetup)" class="mx-2 green--text">how_to_reg</v-icon>
                            <v-icon v-if="userIsCreator(meetup)" class="mx-2 green--text">gavel</v-icon>                                        
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
</template>
