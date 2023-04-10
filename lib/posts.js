import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import {usePosts} from '../hooks/usePosts'
import {useState} from 'react';
import {getPosts} from '../firebase/firebase'

// const postsDirectory = path.join(process.cwd(), 'posts')//「process.cwd()→カレントディレクトリ=nextjs-blog/」+posts


export async function getSortedPostsData() {
         const allPostsData=await getPosts()//postsの内容とidがセットになったもの
         
        return allPostsData.sort((a,b) => {
          if(a.date <b.date){
            return 1;
          }else{
            return -1;
          }
        })
}

export async function getAllPostIds() {
  const posts=await getPosts();
  // const posts=await res.json();
  console.log("postsです")
  console.log(posts)
  // const fileNames = fs.readdirSync(postsDirectory)
  return posts.map((post) => {
    return {
      params: {
        id:post.id,
      },
    };
  });
}

export async function getPostData(argid) {
  const posts=await getPosts();
  let tmppost;
  posts.map((post)=>{
    console.log("aaaaaaaa");
    // console.log(post)
    console.log(post.id)
    console.log(argid.id)
    if(post.id==argid.id){
      tmppost=post
      console.log("ここが機能した")
      console.log(tmppost)
    }
  })
  console.log("resultPostの中身")
console.log({tmppost})
console.log({...tmppost})
  return {
    ...tmppost
  }
}