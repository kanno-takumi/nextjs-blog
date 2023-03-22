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
  //   const {isLoading,posts}=usePosts()
//   const allPostsDate=[]
//   posts.map()
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }
  //nextjs-blog/postsまで
  /******************************************* */

  // Get file names under /posts
  // const fileNames = fs.readdirSync(postsDirectory)//ファイルの名前を読み取る
  // const allPostsData = fileNames.map(fileName => {//posts/[id].jsとした時点でposts/[a]or[b]or[c]等とつながれる
  //   // Remove ".md" from file name to get id
  //   const id = fileName.replace(/\.md$/, '')//.mdと一致する部分を''の内容に書き換える→何もなし

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName)//例）posts/20230116
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')//中身を読み取れるようになった

  //   /*******************確認用**************/
  //   console.log("fileContentsの値")
  //   console.log(fileContents)//---がある状態
  //   /**************************************/

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents)

  //   /*******************確認用**************/
  //   console.log("matterResultの値↓")
  //   console.log(matterResult)//要素ごとに分かれた状態
  //   /**************************************/

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...matterResult.data
  //   }
  // })
  // Sort posts by date

  // export function getAllPostsData(){
  //   const {isLoading,posts}=usePosts();
  //   return posts
  // }  

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