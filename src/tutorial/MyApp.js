import log from './MyConsole';
import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDDMkY3-O_mEsqTHguy-xcpaaqle7aYn2g',
  authDomain: 'simya-learning.firebaseapp.com',
  databaseURL: 'https://simya-learning.firebaseio.com',
  projectId: 'simya-learning',
  storageBucket: 'simya-learning.appspot.com',
  messagingSenderId: '941188548708'
};
const firebaseApp = firebase.initializeApp(config);
export function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const sendMessage = async (username, message) => {
  console.log();
  await firebaseApp
    .database()
    .ref(`users/${username}`)
    .set({ username, message });
};

export const connectToServer = async callback => {
  const database = await firebaseApp.database().ref('users');
  console.log(database);
  database.on('value', snapshot => {
    console.log(snapshot);
    callback(snapshot.val());
  });
};

export default async () => {};
