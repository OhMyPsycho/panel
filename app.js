var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Setup Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAZBU6_wuz84NxkYypWeK62J7t8vayUj3c",
  authDomain: "navegador-b83b5.firebaseapp.com",
  databaseURL: "https://navegador-b83b5.firebaseio.com",
  projectId: "navegador-b83b5",
  storageBucket: "navegador-b83b5.appspot.com",
  messagingSenderId: "54650625622",
  appId: "1:54650625622:web:7c1d21a348614d39"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

var usersRef = db.ref('users')
var websRef = db.ref('webs')
var userConnected = db.ref('userConnected')

// create Vue app
var app = new Vue({
  // element to mount to
  el: '#app',
  // initial data
  data: {
    newWeb: {
      code: '',
      url: ''
    }
  },
  // firebase binding
  // https://github.com/vuejs/vuefire
  firebase: {
    users: usersRef,
    webs: websRef,
    userc: userConnected,
  },
  // computed property for form validation state
  // methods
  methods: {
    addWeb: function () {
        websRef.push(this.newWeb)
        this.newWeb.code= ''
        this.newWeb.url = ''
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    },
    removeWeb: function (web) {
      websRef.child(web['.key']).remove()
    }
  }
})
