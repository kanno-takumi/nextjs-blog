import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import React,{useState} from 'react';
import { siteTitle } from '../components/layout';

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
//自動で定義される
// export const Post={
//     data,
//     title,
//     content
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Get a list of cities from your database
export async function getPosts() {//promiseオブジェクトを返す
  const posts=[];//オブジェクトの配列
  const db = getFirestore(app);
  const Col = collection(db, 'posts');
  const querySnapshot = await getDocs(Col);//async await→非同期処理
  querySnapshot.forEach((doc) =>
  { const post=doc.data() 
    // console.log(post)//表示される
    posts.push({...post,id:doc.id })
  });
  // console.log(posts)
  return posts
  
  // return postsArray
} 

// export async function posts(){
//     const postsList=await getPosts(db); 
//     return postsList;
// }

export function sample(num){
  const calcNum=num*num;
  return calcNum
}
