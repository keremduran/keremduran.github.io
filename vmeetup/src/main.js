// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import DateFilter from './filters/date'
import 'vuetify/dist/vuetify.min.css'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import EditMeetupLocationDialog from './components/Meetup/Edit/EditMeetupLocationDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#1867c0',
    secondary: '#d5f0ff'
  }
})
Vue.filter('datify', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-edit-meetup-location-dialog', EditMeetupLocationDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
        apiKey: 'AIzaSyBpwKK5_hX1M03qwZvv3yjSiGtW6dLEdFA',
        authDomain: 'meetup-eb8b8.firebaseapp.com',
        databaseURL: 'https://meetup-eb8b8.firebaseio.com',
        projectId: 'meetup-eb8b8',
        storageBucket: 'gs://meetup-eb8b8.appspot.com'
      }
    )
    firebase.auth().onAuthStateChanged((user) => {
      if(user !== null){
        this.$store.dispatch('autoSignIn', user)  
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
