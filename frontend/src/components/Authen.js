import React, { Component } from 'react';

// import firebase from "firebase"
// import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
var firebase = require('firebase');


  //Initialize Firebase
  var config = {
    apiKey: "AIzaSyDly2D65N4Uyn6kGVAuvQ3vqVwdOiwb3UA",
    authDomain: "usurvey-3115a.firebaseapp.com",
    databaseURL: "https://usurvey-3115a.firebaseio.com/",
    projectId: "usurvey-3115a",
    storageBucket: "usurvey-3115a.appspot.com",
    messagingSenderId: "570484393141"
  };
  firebase.initializeApp(config);



class Authen extends Component {

  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,password)

    promise.then(user =>{
      var lout= document.getElementById('logout');

      //Write a welcome message for user
      lout.classList.remove('hide');
    });


    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);

    promise
    .then(user => {
      var err = "Welcome "+ user.user.email;
      firebase.database().ref('users/' +user.user.uid).set({
        email: user.user.email
      });
      console.log(user);
      this.setState({err: err});
    });
    promise
    .catch(e => {
      var err = e.message;
      console.log(err);
      this.setState(({err: err}))
    });
  }

  logout(){
    firebase.auth().signOut();
    var lout= document.getElementById('logout');

    //Write a welcome message for user
    lout.classList.add('hide');
  }

  google(){
    console.log("IAM IN GOOGLE CONSOOLE");

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider)

    promise.then( result => {
      var user = result.user;
      console.log(result);
      firebase.database().ref('users/'+user.uid).set({
        email: user.email,
        name: user.displayName
      });
      var lout= document.getElementById('logout');

      //Write a welcome message for user
      lout.classList.remove('hide');
    });
    promise.catch(e => {
      var msg = e.message;
      console.log(msg);
    });
  }
  constructor(props){
    super(props);

    this.state = {
      err: ''
    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }
  render(){
    return(
      <div>
        <h4 className = "Username">Username or Email</h4>
        <input id = "email" ref="email" type="email" placeholder = "Enter your email Bietch" /><br />
        <h4 className = "Password">Password</h4>
        <input id = "password" ref= "password" type="password" placeholder = "Enter your password" /><br />
        <p>{this.state.err}</p>
        <button onClick= {this.login}> Log In </button>
        <button onClick= {this.signup}> Sign Up</button>
        <button onClick= {this.logout} className="hide"> Log Out</button><br />
        <button onClick={this.google}  className="google"> Sign in with Google Account</button>
      </div>
    );
  }
}

export default Authen;
