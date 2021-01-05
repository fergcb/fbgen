import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import store from './store'
import router from './router'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBM7xS1nK2f4zGXVpQ1JA9Ue4CxVKM3PHs',
  authDomain: 'fb-gen.firebaseapp.com',
  projectId: 'fb-gen',
  storageBucket: 'fb-gen.appspot.com',
  messagingSenderId: '162755694934',
  appId: '1:162755694934:web:d6b29a1406ba2c777a86f7',
  measurementId: 'G-SZ46QWJ8TM',
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
auth.useDeviceLanguage()
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit('signin', { user })
  } else {
    store.commit('signout')
    if (router.currentRoute.name !== 'home') {
      router.push({ name: 'home' })
    }
  }
})
const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { db, auth, googleProvider, githubProvider, facebookProvider }
