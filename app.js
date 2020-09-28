const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const firebase = require('firebase');
firebase.initializeApp({
  apiKey: "AIzaSyCtg-um1_xf4DgRwz4xzQf_V6Ea8UxpYNs",
  authDomain: "genisis-chat.firebaseapp.com",
  databaseURL: "https://genisis-chat.firebaseio.com",
  projectId: "genisis-chat",
  storageBucket: "genisis-chat.appspot.com",
  messagingSenderId: "24700544018",
  appId: "1:24700544018:web:bb2a0e1fd41d14b999a4cb"
});

const dbRef = firebase.firestore()

console.log(
    'dbRef-------------------------------------------------------------------------------------------------------------',
    dbRef
)
//
// firebase.initializeApp({
//   databaseURL: 'https://genisis-chat.firebaseio.com/'
// })
//
// var dbRef = firebase.ref('genisis-chat')

// dbRef.orderByChild()

// console.log(dbRef)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // console.log(`Serv ${dbRef}`);
});