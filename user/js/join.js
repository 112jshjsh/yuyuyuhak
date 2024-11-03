import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import validator from "validator";

// Initialize Firebase
const app = initializeApp(validator.firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const auth = getAuth();

// 페이지 이동 링크
var link = 'login.html';

document.getElementById('register').addEventListener('click', (event) => {
    event.preventDefault();
    const newmail = document.getElementById('joinemail').value;
    const newpwd = document.getElementById('joinpwd').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, newmail, newpwd)
    .then((result) => {
        console.log(result)
        const newuser = result.user;
        alert("회원가입이 완료되었습니다.");
        location.href = link;
        location.replace(link);
        window.open(link);
    }).catch((error) => {
        console.log(error)
        alert('입력한 정보를 다시 확인해 주세요.');
    })
})