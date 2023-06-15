// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase , ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//const firebase = require('firebase')

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = firebase.firestore();

// 引入套件



DB.collection('users')
  .add({
    first: 'Dez',
    last: 'Chuang',
    gender: 'male'
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id)
  })
  .catch(function(error) {
    console.error('Error adding document: ', error)
  })

//firebase表單 按下按鈕提交
// document.querySelector('#formBTN').addEventListener('click',function(event){
//   //移除表單默認提交行為
//   event.preventDefault();

//   //輸入表單格子的值
//   var name = document.querySelector('.formName').value;
//   var email = document.querySelector('.formEmail').value;
//   var message = document.querySelector('.formTextArea').value;

//   //在firebase新增解點 讓他存值


//   //加加值
//   newContactRef.set({
//     name:name,
//     email:email,
//     message:message
//   });

//   document.querySelector('.fromName').value = '';
//     document.querySelector('.fromEmail').value = '';
//     document.querySelector('.fromTextArea').value = '';
//   alert('提交成功！');

// });

