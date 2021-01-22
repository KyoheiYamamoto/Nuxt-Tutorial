import firebase from 'firebase'
if (firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAWa7LEBW48MuoA_njEXqf6Uz3eZkyd66g',
    authDomain: 'nuxt-tutorial-kyohei.firebaseapp.com',
    projectId: 'nuxt-tutorial-kyohei',
    storageBucket: 'nuxt-tutorial-kyohei.appspot.com',
    messagingSenderId: '288090485508',
    appId: '1:288090485508:web:ecbc1e56fdecf170719651',
    measurementId: 'G-960Y67FRBZ',
  })
}

export default firebase
