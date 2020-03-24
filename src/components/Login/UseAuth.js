import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const [user, setUser] = useState({
        isSignedIn: '',
        name: '',
        photo: '',
        email: '',
        password: ''
    })
    const createNewUser = () => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(res);
            return res.user;
        })
        .catch(err => {
            console.log(err);
            return err.message;
        })
    }
    return{
        createNewUser
    }
}

export default Auth;