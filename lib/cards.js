import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const cardsDirectory = path.join(process.cwd(), 'cards')//「process.cwd()→カレントディレクトリ=nextjs-blog/」+cards
const cardsDirectory2 = path.join(cardsDirectory,'card')


//indexで順番に表示するための準備
export function getSortedCardsData() {
  // Get file names under /posts
  // const folderNames = fs.readdirSync(cardsDirectory)//fileNamesがディレクトリになっている
  // const fileNames=folderNames.map(folderName =>{//folderNameの中でさらにファイルを見つける必要がある。
  //   fs.readdirSync(folderName)  
  //   })
  console.log(path.join(cardsDirectory,"card"))
  const fileNames=fs.readdirSync(cardsDirectory2)
  const allCardsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(cardsDirectory2, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {//配列を返す
      id,//hobbyとか
      ...matterResult.data//content、date等の配列
    }
  })
//ここまではallCardsDataの関数(returnの内容も)

  // Sort posts by date
  //日付で分類している
  return allCardsData.sort((a, b) => {
    if (a.order < b.order) {
      return 1
    } else {
      return -1
    }
  })
}

//ファイル名からidを取得する関数
export function getAllCardIds() {
  const fileNames = fs.readdirSync(cardsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        cardid: ["card",/*fileName.replace(/\.md$/, '')*/"hobby"]//paramsにcardidを追加
      }
    }
  })
}

export async function getCardData(cardid/*cardとhobby*/) {
  const fullPath = path.join(cardsDirectory, `${cardid}.md`)// nextjs-blog/cardsまで
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    cardid,
    contentHtml,
    ...matterResult.data
  }
}