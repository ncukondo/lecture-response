import Vue from 'vue'
import {
  firestorePlugin
} from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const {
  VUE_APP_apiKey: apiKey,
  VUE_APP_authDomain: authDomain,
  VUE_APP_databaseURL: databaseURL,
  VUE_APP_projectId: projectId,
  VUE_APP_storageBucket: storageBucket,
  VUE_APP_messagingSenderId: messagingSenderId,
  VUE_APP_appId: appId,
  VUE_APP_measurementId: measurementId

} =
process.env;

const firebaseApp = firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
});

export const db = firebaseApp.firestore();