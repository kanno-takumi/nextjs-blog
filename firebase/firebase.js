import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,query,where,addDoc,onSnapshot,doc} from 'firebase/firestore';
import { documentId } from 'firebase/firestore';
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
const db = getFirestore(app);

// Get a list of cities from your database

//onSnapshot 引数1→欲しいデータの前のデータ（例：ドキュメント→コレクション）
//引数2→処理

export async function getPosts() {//promiseオブジェクトを返す
  const posts=[];//オブジェクトの配列
  // const querySnapshot = onSnapshot(docQuery,await getDocs(col));//async await→非同期処理
  console.log("ここは動いている")
  const col= collection(db,'posts');
  // const querySnapshot =await getDocs(col);
  //試しに書いてみる
  const Col = collection(db, 'posts');
  const querySnapshot = await getDocs(Col);//async await→非同期処理
  querySnapshot.forEach((doc) =>
  { const post=doc.data() 
    // console.log(post)//表示される
    posts.push({...post,id:doc.id })
  });
  
  console.log("postsです")
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  console.log(posts)
  return posts
  // return postsArray
} 

export async function addPosts(postData){
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      content:postData.content,
      date: postData.date,
      title: postData.title
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

