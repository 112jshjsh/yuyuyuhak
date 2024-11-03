import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import validator from "validator";

// Initialize Firebase
const app = initializeApp(validator.firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const uid = '';

// 페이지 이동 링크
var link = '../mainscreen_login.html';

document.getElementById('login').addEventListener('click', (event) => {
    event.preventDefault();
    const usermail = document.getElementById('loginmail').value;
    const userpwd = document.getElementById('loginpwd').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, usermail, userpwd)
    .then((result) => {
        
        location.href = link;
        location.replace(link);
        window.open(link);
    }).catch((error) => {
        console.log(error)
        alert('아이디 또는 비밀번호가 틀립니다.');
    })
})