import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import {usePosts} from '../hooks/usePosts'
import {useState} from 'react';
import {getPosts} from '../firebase/firebase'

// const postsDirectory = path.join(process.cwd(), 'posts')//「process.cwd()→カレントディレクトリ=nextjs-blog/」+posts


// 日付文字列ではなく正しく比較するにはDataオブジェクトに変換する必要がある。
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

export async function getPostData(argid) {//idしかゲットできていない
  const posts=await getPosts();//firebaseから取得するメソッド
  console.log("posts",posts)
  let tmppost;
  posts.map((post)=>{//postsは全データ postはその1つ
    // console.log("aaaaaaaa");
    // console.log(post)
    console.log("post.idとargid.id")
    console.log(post.id)
    console.log(argid.id)
    if(post.id==argid.id){//idが一致するやつの中身を返したい
      tmppost=post
      console.log("ここが機能した")
      console.log(tmppost)
    }
  })
  console.log("resultPostの中身")
console.log(tmppost)
console.log({...tmppost})//同じこと

//textをmarkdownにしたい
  const content = tmppost.content
  console.log(content)
  // const formatMarkdown = content.replace(/\<br>/g, '<br>');
  // console.log(formatMarkdown)
  // 不適切な改行とエスケープを修正する処理

  const matterResult = matter(content)
  const processedContent = await remark()
    .use(html,{sanitize:false})
    .process(matterResult.content)
    let contentHtml = processedContent.toString()
    console.log(contentHtml)
    // contentHtml =contentHtml.split('  ').join('</p><br><p>')
  // const contentHtml = tmpHtml.replace(/\n/g,'<br>')

  return ({
    id:tmppost.id,
    title:tmppost.title,
    date:tmppost.date,
    show:tmppost.show,
    image:tmppost.image,
    // content:tmppost.content,
    contentHtml:contentHtml,
    ...matterResult.data,//metadata
  })
    
  
}