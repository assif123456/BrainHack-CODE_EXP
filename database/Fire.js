import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAhuygsBKAC98YgmeKXnCoF3ONpFbPp8gY",
        authDomain: "brainhack-81a68.firebaseapp.com",
        databaseURL:
          "https://brainhack-81a68-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "brainhack-81a68",
        storageBucket: "brainhack-81a68.appspot.com",
        messagingSenderId: "215015159461",
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

      parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
          };
         return message;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
      }

      send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
            timestamp: this.timestamp,
          };
          this.append(message);
        }
      };
      append = message => this.ref.push(message);

    off() {
        this.ref.off();
      }

}

Fire.shared = new Fire();
export default Fire;
