import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')//「process.cwd()→カレントディレクトリ=nextjs-blog/」+posts

export function getSortedPostsData() {//indexで使っている

  /******************確認用**********************/
  console.log("postsDirectoryです↓")
  console.log(postsDirectory)
  //nextjs-blog/postsまで
  /******************************************* */

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)//ファイルの名前を読み取る
  const allPostsData = fileNames.map(fileName => {//posts/[id].jsとした時点でposts/[a]or[b]or[c]等とつながれる
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')//.mdと一致する部分を''の内容に書き換える→何もなし

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)//例）posts/20230116
    const fileContents = fs.readFileSync(fullPath, 'utf8')//中身を読み取れるようになった

    /*******************確認用**************/
    console.log("fileContentsの値")
    console.log(fileContents)//---がある状態
    /**************************************/

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    /*******************確認用**************/
    console.log("matterResultの値↓")
    console.log(matterResult)//要素ごとに分かれた状態
    /**************************************/

    // Combine the data with the id
    return {
      id,
      ...matterResult.data//日付を取得している
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown\ into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}