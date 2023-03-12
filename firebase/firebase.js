import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import React,{useState} from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3csFVCqMyMbWZhtf_ARcHLXEDR5WbDsU",
  authDomain: "takumi-nextjs-blog.firebaseapp.com",
  projectId: "takumi-nextjs-blog",
  storageBucket: "takumi-nextjs-blog.appspot.com",
  messagingSenderId: "571600524639",
  appId: "1:571600524639:web:6b9c43be595de21b37d2ea",
  measurementId: "G-FCPY86QVK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get a list of cities from your database
export async function getPosts() {//promiseオブジェクトを返す
  const db = getFirestore(app);
  const Col = collection(db, 'posts');
  const querySnapshot = await getDocs(Col);//async await→非同期処理
  const postsArray=[]
  querySnapshot.forEach((doc) =>
    postsArray.push(doc.data())
    );
  console.log(postsArray)
  return postsArray
} 

// export async function posts(){
//     const postsList=await getPosts(db); 
//     return postsList;
// }

export function sample(num){
  const calcNum=num*num;
  return calcNum
}
