import * as firebase from 'firebase'

export default {
    state: {
        loadedMeetups: [],
    },
    mutations: {
        setLoadedMeetups(state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        updateMeetup(state, payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if (payload.title) {
                meetup.title = payload.title
            }
            if (payload.description) {
                meetup.description = payload.description
            }
            if (payload.date) {
                meetup.date = payload.date
            }
            if (payload.location) {
                meetup.location = payload.location
            }
        },
    },
    actions: {
        loadMeetups({ commit }) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
                .then((data) => {
                    const meetups = []
                    // .val() excludes the unnecessary metadata
                    const meetupsFB = data.val()
                    for (let key in meetupsFB) {
                        meetups.push({
                            id: key,
                            title: meetupsFB[key].title,
                            description: meetupsFB[key].description,
                            imageUrl: meetupsFB[key].imageUrl,
                            date: meetupsFB[key].date,
                            location: meetupsFB[key].location,
                            creatorId: meetupsFB[key].creatorId
                        })
                    }
                    commit('setLoadedMeetups', meetups)
                    commit('setLoading', false)
                })
                .catch(
                    (error) => {
                        console.log(error);
                        commit('setLoading', false)
                    }
                )
        },
        createMeetup({ commit, getters }, payload) {
            commit('setLoading', true)
            const meetup = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }
            let imageUrl
            let key
            firebase.database().ref('meetups').push(meetup)
                .then((data) => {
                    key = data.key
                    return key
                })
                .then(key => {
                    const fileName = payload.image.name
                    const ext = fileName.slice(fileName.lastIndexOf('.'))
                    return firebase.storage().ref('meetups/' + key + ext).put(payload.image)
                })
                .then(fileData => {
                    fileData.ref.getDownloadURL()
                        .then(url => {
                            imageUrl = url
                            console.log('File available at ', imageUrl)
                            return firebase.database().ref('meetups').child(key).update({
                                imageUrl: imageUrl
                            })
                        })
                })
                .then(() => {                  
                    commit('setLoading', false)
                    commit('createMeetup', {
                        ...meetup,
                        imageUrl: imageUrl,
                        id: key
                    })
                })
                .catch((error) => {       
                    commit('setLoading', false)
                    console.log(error)
                })
        },
        updateMeetup({ commit }, payload) {
            commit('setLoading', true)
            const updatedObj = {}
            if (payload.title) {
                updatedObj.title = payload.title
            }
            if (payload.description) {
                updatedObj.description = payload.description
            }
            if (payload.date) {
                updatedObj.date = payload.date
            }
            if (payload.location) {
                updatedObj.location = payload.location
            }
            if (payload.id) {
                updatedObj.id = payload.id
            }
            firebase.database().ref('meetups').child(payload.id).update(updatedObj)
                .then(() => {
                    commit('setLoading', false)
                    commit('updateMeetup', updatedObj)
                })
                .catch(error => {
                    console.log(error)
                    commit('setLoading', false)
                })
        },
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
    }
}
